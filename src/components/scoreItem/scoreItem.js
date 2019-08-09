import React  from 'react';
import './scoreItem.css';

class ScoreItem extends React.Component {
    render() {
        return (
            <div className="scoreContainer">
                <label className="scoreText">{this.props.value}</label>
                <button className="scoreDelete" onClick={() => this.props.delete(this.props.id, this.props.value)}>X</button>
            </div>
        );
    }
}

export default ScoreItem;