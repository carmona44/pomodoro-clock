
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      default: [5, 25, false, "Session"],
      breakLength: 5,
      sessionLength: 25,
      isPlay: false,
      timerLabel: "Session"
    };
    this.decrementBreak = this.decrementBreak.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
    this.playStop = this.playStop.bind(this);
    this.restart = this.restart.bind(this);
  }

  decrementBreak(){
    this.setState({
      breakLength: this.state.breakLength - 1
    });
  }

  decrementSession(){
    this.setState({
      sessionLength: this.state.sessionLength - 1
    });
  }

  incrementBreak(){
    this.setState({
      breakLength: this.state.breakLength + 1
    });
  }

  incrementSession(){
    this.setState({
      sessionLength: this.state.sessionLength + 1
    });
  }

  playStop(){
    this.setState({
      playStop: !this.state.playStop
    });
  }

  restart(){
    this.setState({
      breakLength: this.state.default[0],
      sessionLength: this.state.default[1],
      isPlay: this.state.default[2],
      timerLabel: this.state.default[3]
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>Reloj de Pomodoro</h2>
  
          <div id="input">
            <label id="break-label">Break Length</label>
            <label id="session-label">Session Length</label>
  
            <button id="break-decrement" onClick={this.decrementBreak}>Break decrement</button>
            <button id="session-decrement" onClick={this.decrementSession}>Session decrement</button>
            <button id="break-increment" onClick={this.incrementBreak}>Break increment</button>
            <button id="session-increment" onClick={this.incrementSession}>Session increment</button>
  
            <span id="break-length">{this.state.breakLength}</span>
            <span id="session-length">{this.state.sessionLength}</span>
          </div>
  
          <div id="output">
            <span id="timer-label">{this.state.timerLabel}</span>
            <span id="time-left">{this.state.sessionLength}:00</span>
          </div>
  
          <div id="control">
            <button id="start_stop" onClick={this.playStop}>Start/Stop</button>
            <button id="reset" onClick={this.restart}>Reset</button>
          </div>
        </header>
      </div>
    );
  }
  
}

export default App;
