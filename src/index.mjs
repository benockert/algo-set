'reach 0.1';

// enum of possible outcomes
const [isResult, CONTINUE, PLAYER_1_WINS, PLAYER_2_WINS, DRAW] = makeEnum(4);

// helper function for comparing guesses
const checkWord = (word, answer) => (word == answer);

// test check word function
assert(checkWord("test", "test"));
assert(!checkWord("test", "nope"));

// helper function for determining round results
const determineRoundResult = (player1Correct, player2Correct) => (!player1Correct && !player2Correct ? 0 : player1Correct && !player2Correct ? 1 : !player1Correct && player2Correct ? 2 : 3)

// test determine result function
assert(determineRoundResult(false, false) == CONTINUE);
assert(determineRoundResult(true, false) == PLAYER_1_WINS);
assert(determineRoundResult(false, true) == PLAYER_2_WINS);
assert(determineRoundResult(true, true) == DRAW);

// Player interface
const Player = {
    // gets a user's guess for a certain round
    getGuess: Fun([], Bytes(5)),
    // views the winning uer's name, winning word, and winning number of guesses
    seeOutcome: Fun([UInt], Null), //todo send both players words??
    // inform timeout if a player does not guess
    informTimeout: Fun([], Null),
}

export const main = Reach.App(() => {
    const Player1 = Participant('Player1', {
        ...Player, // inherit Player interface
        wager: UInt, // number of Algo wagered for this game
        word: Bytes(5),
        deadline: UInt,
    })

    const Player2 = Participant('Player2', {
        ...Player, // inherit the Player interface
        acceptWager: Fun([UInt], Null), // accept the wager from Player1
        word: Bytes(5),
    })

    // initialize the app 
    init();

    const informTimeout = () => {
        each([Player1, Player2], () => {
            interact.informTimeout();
        });
    };

    // Player1 publishes and pay the wager; also sets the deadline for each round
    Player1.only(() => {
        const wager = declassify(interact.wager);
        const deadline = declassify(interact.deadline);

        const wordPlayer1 = declassify(interact.word);
    });
    Player1.publish(wager, deadline, wordPlayer1).pay(wager);
    commit();

    // Player2 accepts the wager and pays the wager (only has the set deadline to do so)
    Player2.only(() => {
        interact.acceptWager(wager);

        const wordPlayer2 = declassify(interact.word);
    });
    Player2.publish(wordPlayer2).pay(wager).timeout(relativeTime(deadline), () => closeTo(Player1, informTimeout));

    // keep track of the number of guesses and if there is a winner yet or not 
    //var numberOfRounds = 1;
    var result = CONTINUE;
    invariant(balance() == 2 * wager && isResult(result));
    // play the game while there is no winner declared
    while (result == CONTINUE) {
        commit();

        // get player1's guess and commit it
        Player1.only(() => {
            const guessPlayer1 = declassify(interact.getGuess());
        });
        Player1.publish(guessPlayer1).timeout(relativeTime(deadline), () => closeTo(Player2, informTimeout));
        commit();

        // get player2's guess and commit it
        Player2.only(() => {
            const guessPlayer2 = declassify(interact.getGuess());
        });
        Player2.publish(guessPlayer2).timeout(relativeTime(deadline), () => closeTo(Player1, informTimeout));

        // now check results of each player's guess
        // player1Outcome = checkWord(guessPlayer1, wordPlayer2);
        // player2Outcome = checkWord(guessPlayer2, wordPlayer1);

        // determine result of the rount
        result = determineRoundResult(checkWord(guessPlayer1, wordPlayer2), checkWord(guessPlayer2, wordPlayer1));
        continue;
    }

    // check we do not have an undecided outcome
    assert(result == PLAYER_1_WINS || result == PLAYER_2_WINS || result == DRAW);

    // determine payouts 
    const [forPlayer1, forPlayer2] = result == PLAYER_1_WINS ? [2, 0] : result == PLAYER_2_WINS ? [0, 2] : [1, 1];

    // transfer wager based on result
    transfer(forPlayer1 * wager).to(Player1);
    transfer(forPlayer2 * wager).to(Player2);
    commit();

    each([Player1, Player2], () => {
        interact.seeOutcome(result);
    });

});