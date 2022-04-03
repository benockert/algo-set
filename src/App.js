import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import { renderView } from './views/renderView';
import './index.css';

// load in Reach
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(); // default to ETH

const outcomes = ['Player 1 wins!', 'Player 2 wins', 'The game was drawn!'];
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
    this.setState({ acc, bal, view: 'DeployerOrAttacher' });
  }

  selectAttacher() { this.setState({ view: 'Wrapper', ContentView: Attacher }); }
  selectDeployer() { this.setState({ view: 'Wrapper', ContentView: Deployer }); }
  render() { return renderView(this, AppViews); }
}

class Player extends React.Component {
  async getGuess() {
    const guess = await new Promise(resolveHandP => {
      this.setState({ view: 'MakeGuess', playable: true, resolveHandP });
    });
    this.setState({ view: 'WaitingForResults', guess, guesses: [...this.state.guesses, guess] });
    return guess;
  }

  seeOutcome(i) { this.setState({ view: 'Done', outcome: outcomes[i] }); }
  informTimeout() { this.setState({ view: 'Timeout' }); }
  makeGuess(guess) { this.state.resolveHandP(guess); } // guess = ['h', 'e', 'l', 'l', 'o']
  seeGuessResult(result) { this.setState({ results: [...this.state.results, result] }) }; // result = [0, l, 1, 2, 0]
}

class Deployer extends Player {
  constructor(props) {
    super(props);
    this.state = { view: 'SetWager' };
  }
  setWager(wager) { this.setState({ view: 'Deploy', wager }); }
  async deploy() {
    const ctc = this.props.acc.contract(backend);
    this.setState({ view: 'Deploying', ctc });
    this.wager = reach.parseCurrency(this.state.wager);
    this.deadline = 50
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
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({ view: 'Attaching' });
    backend.Player2(ctc, this);
  }
  async acceptWager(wagerAtomic) {
    const wager = reach.formatCurrency(wagerAtomic, 4);
    return await new Promise(resolveAcceptedP => {
      this.setState({ view: 'AcceptTerms', wager, resolveAcceptedP });
    });
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({ view: 'WaitingForTurn' });
  }
  render() { return renderView(this, AttacherViews); }
}

export default App;