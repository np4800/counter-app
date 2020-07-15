import React, { Component } from 'react';
import Counter from './counter';


// Rule of Thumb in React Applications: "THe components that OWNS a peice of the STATE, should be the one MODIFYING it "
// STATE is the private element to a Component and "PROPS" is global that you can access
// Here the state is local to this components and the button to delete and increment are in counter (without 's')  -  therefore to access 'state' which resides in
// counters (with 's') - counter component has to raise an EVENT like onDelete from Delete button -  and the even will be handled here in Counters component
// THis event and handle mechanism is alloted in may react libraries

// << Moved the code to its parent App.js because that has to be controlled from there - so here props will be used to push the bubble of events
// And the handle code is written in App.js - here it will just trigger the bubble of events

// purpose of includeing the props
class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2" >Reset</button>
          {this.props.counters.map(counter => (
            <Counter key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counter={counter}>
              <h4>Counter #{this.props.id}</h4>
            </Counter>
        ))}
      </div>
    );
  }
}

export default Counters
