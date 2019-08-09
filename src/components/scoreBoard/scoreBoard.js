import React  from 'react';
import ScoreItem from '../scoreItem/scoreItem.js'
import './scoreBoard.css';

class ScoreBoard extends React.Component {
    render() {
        return (
            <div className="scoreBoardContainer">
                <h3>Scoreboard</h3>
                <div className="score">Score: {this.props.total} | Shots: {this.props.scores.length}</div>
                <button className="resetButton" onClick={() => this.props.reset()}>Reset</button>
                <div className="scoreSection">
                    {this.props.scores.map(score => <ScoreItem key={score.key} id={score.key} value={score.value} delete={this.props.delete} ></ScoreItem>)}
                </div>
            </div>
        );
    }
}

export default ScoreBoard;