import React  from 'react';
import './roundSummary.css'

class RoundSummary extends React.Component {    
    render() {        
        return (
            <div className="summaryContainer">
                <h3>Summary</h3>
                {this.props.summary.map(round => <div key={round.key} ><div><b>Round: {round.round}</b></div>Score: {round.total} | Shots: {round.shots}</div> )}
            </div>
        );
    }    
}

export default RoundSummary;