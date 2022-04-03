import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetGuess = class extends React.Component {
  render() {
    const { parent, playable, guess } = this.props;
    const wordToGuess = (this.state || {}).wordToGuess || "";
    return (
      <div>
        {guess ? 'No one guessed the other\'s word! Guess another word.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        New guess:
        <input
          type='text'
          disabled={!playable}
          onChange={(e) => this.setState({ wordToGuess: e.currentTarget.value })}
        />
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.makeGuess(wordToGuess)}
        >Make Guess</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const { outcome } = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;
