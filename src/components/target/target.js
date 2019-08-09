import React  from 'react';
import './target.css';

class Target extends React.Component {    
    render() {        
        return (
            <div className="targetContainer">
                <svg height="100%" width="100%" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50" stroke="black" strokeWidth="0.5" fill="white" onClick={() => this.props.addScore(1)}></circle>
                    <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="0.5" fill="white" onClick={() => this.props.addScore(2)}></circle>
                    <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="0.5" fill="black" onClick={() => this.props.addScore(3)}></circle>
                    <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="0.5" fill="black" onClick={() => this.props.addScore(4)}></circle>
                    <circle cx="50" cy="50" r="30" stroke="black" strokeWidth="0.5" fill="blue" onClick={() => this.props.addScore(5)}></circle>
                    <circle cx="50" cy="50" r="25" stroke="black" strokeWidth="0.5" fill="blue" onClick={() => this.props.addScore(6)}></circle>
                    <circle cx="50" cy="50" r="20" stroke="black" strokeWidth="0.5" fill="red" onClick={() => this.props.addScore(7)}></circle>
                    <circle cx="50" cy="50" r="15" stroke="black" strokeWidth="0.5" fill="red" onClick={() => this.props.addScore(8)}></circle>
                    <circle cx="50" cy="50" r="10" stroke="black" strokeWidth="0.5" fill="yellow" onClick={() => this.props.addScore(9)}></circle>
                    <circle cx="50" cy="50" r="5" stroke="black" strokeWidth="0.5" fill="yellow" onClick={() => this.props.addScore(10)}></circle>
                </svg>
            </div>
        );
    }    
}

export default Target;