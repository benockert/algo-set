import React from 'react';
import PlayerViews from './PlayerViews';

const exports = { ...PlayerViews };

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="Deployer">
        <h2>Deployer (Player 1)</h2>
        {content}
      </div>
    );
  }
}

exports.SetWagerAndWord = class extends React.Component {
  render() {
    const { parent, defaultWager, standardUnit } = this.props;
    const wager = (this.state || {}).wager || defaultWager;
    const word = (this.state || {}).word || "";
    return (
      <div>
        Wager:
        <input
          type='number'
          placeholder={defaultWager}
          onChange={(e) => this.setState({ wager: e.currentTarget.value })}
        /> {standardUnit}
        <br />
        Word for opponent to guess:
        <input
          type='text'
          onChange={(e) => this.setState({ word: e.currentTarget.value })}
        />
        <br />
        <button
          onClick={() => parent.setWagerAndWord(wager, word)}
        >Set wager and word</button>
      </div>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const { parent, wager, standardUnit } = this.props;
    return (
      <div>
        Wager (pay to deploy): <strong>{wager}</strong> {standardUnit}
        <br />
        <button
          onClick={() => parent.deploy()}
        >Deploy</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying... please wait.</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipboard(button) {
    const { ctcInfoStr } = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const { ctcInfoStr } = this.props;
    return (
      <div>
        Waiting for Attacher to join...
        <br /> Please give them this contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipboard(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}

export default exports;
