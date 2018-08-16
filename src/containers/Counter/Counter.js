import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" onClick={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" onClick={this.props.onDecrementCounter} />
        <CounterControl label="Add 20" onClick={this.props.onAddCounter} />
        <CounterControl label="Subtract 25" onClick={() => this.props.onSubtractCounter(25)} />
        <hr />

        <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
        <ul>
          {
            this.props.storedResults.map(strResult => (
              <li 
                key={strResult.id}
                onClick={() => this.props.onDeleteResult(strResult.id)}>
                {strResult.value}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter,
    storedResults: state.res.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(20)),
    onSubtractCounter: (value) => dispatch(actionCreators.subtract(value)),
    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
