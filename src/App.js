import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
  //Variables and state section
  state = {
    counters: [
      { id:1, value:4},
      { id:2, value:0},
      { id:3, value:0},
      { id:4, value:0}
    ]
  }

  // Functions
  handleIncrement = counter => {
    console.table(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("Reset");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
  }

  // This concept of event-handle can be implemented - add new method in Counters and pass a ref to taht method via props to the counter.
  // Event Handler Method as the state is local to this component
  handleDelete = (counterId) => {
    console.log("Event Handler Called",counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId );
    this.setState({ counters: counters });
  }
  render() {
    return (
     <React.Fragment>
        <Navbar totalcounters={this.state.counters.filter(c => c.value>0).length}/>
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
