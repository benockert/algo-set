import React from 'react';

const exports = {};

exports.MakeGuess = class extends React.Component {
    render() {
        const { parent, playable, hand } = this.props;
        return (
            <div>
                {hand ? 'It was a draw! Pick again.' : ''}
                <br />
                {!playable ? 'Please wait...' : ''}
                <br />
                <button
                    disabled={!playable}
                    onClick={() => parent.MakeGuess('test1')}
                >Rock</button>
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