import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ['tag1', 'tag2', 'tag3'],
    tags: []
  };
  //
  // constructor() {
  //   super(); // This has to be declared
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //Arrow function will replace above constructor method of binding the objects to a class
 //Arrow functions do not rebind that "this" keyword - they inherit it.


 // COunter component will be now a 'Controlled' component that will recieve a handle and it will send an event to the parent component via props.
 // Therefore, there is no need to have handleIncrement() (a handler) over here.
  // handleIncrement = product => {
  //   console.log("Increment Clicked",this);
  //   console.log(product);
  //   this.setState({value: this.state.value + 1});
  // }
  //
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // }

  render() {
    console.log(this.props);
    return (<div>
          <span  className={this.getNewClasses()}> {this.formatCount()} </span>
          <button onClick={() => this.props.onIncrement(this.props.counter) } className="btn btn-success btn-sm">Increment</button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
      );
  }

  // renderTags() {
  //   if (this.props.counter.tags.length === 0) return <p> Tags are empty </p>;
  //   return <ul>{this.props.counter.tags1.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  // }

  getNewClasses() {
    let classes ="badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value
  }
}

export default Counter;
