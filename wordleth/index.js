import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import { renderDOM, renderView } from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib();

const outcomes = ['Player 1 wins!', 'Player 2 wins!', 'The game is drawn!'];
const { standardUnit } = reach;
const defaults = { defaultFundAmt: '10', defaultWager: '3', standardUnit };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'ConnectAccount', ...defaults };
  }
  async componentDidMount() {
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({ acc, bal });

    this.setState({ view: 'DeployerOrAttacher' });
  }
}
  async fundAccount(fundAmount) {
  await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
  this.setState({ view: 'DeployerOrAttacher' });
}
  async skipFundAccount() { this.setState({ view: 'DeployerOrAttacher' }); }
selectAttacher() { this.setState({ view: 'Wrapper', ContentView: Attacher }); }
selectDeployer() { this.setState({ view: 'Wrapper', ContentView: Deployer }); }
render() { return renderView(this, AppViews); }
}

class Player extends React.Component {
  random() { return reach.hasRandom.random(); }
  async getGuess() { // guess will be a string
    const guess = await new Promise(resolveGuessP => {
      this.setState({ view: 'GetGuess', playable: true, resolveGuessP });
    });
    this.setState({ view: 'WaitingForResults', guess });
    return guess;
  }
  seeOutcome(i) { this.setState({ view: 'Done', outcome: outcomes[i - 1] }); }
  informTimeout() { this.setState({ view: 'Timeout' }); }
  makeGuess(guess) { this.state.resolveGuessP(guess); }
}

class Deployer extends Player {
  constructor(props) {
    super(props);
    this.state = { view: 'SetWagerAndWord' };
  }
  setWagerAndWord(wager, word) { this.setState({ view: 'Deploy', wager, word }); }
  async deploy() {
    const ctc = this.props.acc.contract(backend);
    this.setState({ view: 'Deploying', ctc });
    this.wager = reach.parseCurrency(this.state.wager);
    this.deadline = 50;
    this.word = this.state.word;
    backend.Player1(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({ view: 'WaitingForAttacher', ctcInfoStr });
  }
  render() { return renderView(this, DeployerViews); }
}
class Attacher extends Player {
  constructor(props) {
    super(props);
    this.state = { view: 'Attach' };
  }
  attach(ctcInfoStr, word) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.word = word
    this.setState({ view: 'Attaching' });
    backend.Player2(ctc, this);
  }
  async acceptWager(wagerAtomic) {
    const wager = reach.formatCurrency(wagerAtomic, 4);
    return await new Promise(resolveAcceptedP => {
      this.setState({ view: 'AcceptTerms', wager, resolveAcceptedP });
    });
  }

  // terms accepted, so now set word
  async termsAccepted() {
    this.state.resolveAcceptedP();
    return await new Promise(resolveSetWordP => {
      this.setState({ view: 'SetWordToGuess', resolveSetWordP });
    });
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({ view: 'WaitingForTurn' });
  }
  render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);
