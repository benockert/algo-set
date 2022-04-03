import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(); // todo add ALGO and fix error

const isPlayer1 = await ask.ask(
    `Are you Player 1?`,
    ask.yesno
);
const who = isPlayer1 ? 'Player 1' : 'Player 2';
console.log(`Starting Algo Worldle as ${who}!`);

let acc = null;
const createAcc = await ask.ask(
    `Would you like to create a test account? (only possible on devnet)`,
    ask.yesno
);
if (createAcc) {
    console.log(`Creating test account for ${who}`);
    acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
} else {
    const secret = await ask.ask(
        `What is your account secret?`,
        (x => x)
    );
    acc = await stdlib.newAccountFromSecret(secret);
}

let ctc = null;
if (isPlayer1) {
    ctc = acc.contract(backend);
    ctc.getInfo().then((info) => {
        console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
    });
} else {
    const info = await ask.ask(
        `Please paste the contract information:`,
        JSON.parse
    );
    ctc = acc.contract(backend, info);
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));
const before = await getBalance();
console.log(`Your balance is ${before}`);
const interact = {};

interact.informTimeout = () => {
    console.log(`There was a timeout.`);
    process.exit(1);
};

if (isPlayer1) {
    const amt = await ask.ask(
        `How much do you want to wager?`,
        stdlib.parseCurrency
    );
    interact.wager = amt;
    interact.deadline = 100; // 100 blocks
} else {
    interact.acceptWager = async (amt) => {
        const accepted = await ask.ask(
            `Do you accept the wager of ${fmt(amt)}?`,
            ask.yesno
        );
        if (!accepted) {
            process.exit(0);
        }
    };
}

// if the word length is 5, great, otherwise return false so the process exits
const checkUserWordInput = (word) => {
    return word.length == 5 ? word.toLowerCase() : false;
}

const word = await ask.ask(
    `What 5 letter word do you want your opponent to guess?`,
    checkUserWordInput
);
if (!word) {
    process.exit(0);
}
interact.word = word;

interact.getGuess = async () => {
    const wordGuessed = await ask.ask(`What word will you guess?`, (word) => {
        if (word.length != 5) {
            throw Error(`Not a valid guess: ${word}`);
        }
        return word.toLowerCase();
    });
    console.log(`Waiting on opponent...`);
    return wordGuessed;
};

const OUTCOME = ['Player 1 wins', 'Player 2 wins', 'Draw'];
interact.seeOutcome = async (outcome) => {
    console.log(`The outcome is: ${OUTCOME[outcome - 1]}`);
};

// choose which backend function to interact with
const part = isPlayer1 ? ctc.p.Player1 : ctc.p.Player2;
await part(interact);
const after = await getBalance();
console.log(`Your balance is now ${after}`);
ask.done();