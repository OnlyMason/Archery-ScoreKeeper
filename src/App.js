import React from 'react';
import ScoreBoard from './components/scoreBoard/scoreBoard.js';
import Target from './components/target/target.js';
import RoundSummary from './components/roundSummary/roundSummary.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        total: 0,
        scores: [],
        roundSummary: []
    };
}    
  render() {
      return (
      <div className="App">
        <div className="appContainer">
          <Target className="target" addScore={this.addScore}></Target>
          <div className="dataContainer">
            <ScoreBoard className="scoreBoard" delete={this.delete} reset={this.reset} scores={this.state.scores} total={this.state.total}></ScoreBoard>
            <RoundSummary className="roundSummary" summary={this.state.roundSummary}></RoundSummary>      
          </div>           
        </div>    
      </div>
    );
  }

  addScore = (value) => {
    var total = this.state.total;
    this.setState({
      scores: [...this.state.scores, {
          key:new Date().getTime(), 
          value:value
        }],
      total: total += value      
    })
  }

  delete = (key, value) => {
    var total = this.state.total;
    this.setState({
      scores: [...this.state.scores.filter((score) => score.key !== key)],
      total: total-=value
    })
  }

  reset = () => {
    this.setState({ 
      roundSummary: this.state.roundSummary.concat([{
        key:new Date().getTime(), 
        total: this.state.total,
        shots: this.state.scores.length}]),
      scores:[],
      total: 0
    })
  }
}   

export default App;
