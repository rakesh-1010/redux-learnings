import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actionCreator from './store/action/action'


class App extends React.Component {

  render() {

    return (
      <div className="App">
        <br/>
        <div>Age: <span>{this.props.age}</span></div>
        <br/>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        &nbsp;
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <hr/>
        <div>History</div>
        <div>
          <ul>
            {
            this.props.history.map( el => (
              <li>{el}</li>
            ) )
            }
          </ul>
        </div>
      </div>
    );

  }
}

const mapStateProps = (state) => {
  return{
    age: state.age,
    history: state.history
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    onAgeUp: () => actionCreator.onAgeUp,
    onAgeDown: () => actionCreator.onAgeDown
  }
}

export default connect(mapStateProps, mapDispatchProps)(App);
