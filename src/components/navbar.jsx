import React, { Component } from 'react';

//stateless functinal component is sometime the replacement of class as show here
// in stateless functional component 'props' is passed a parameter
// const Navbar = () => {
//   return (<same is shown below in render method>)
// }


class Navbar extends Component {
  //Variables and state section
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar <span className="badge badge-pill badge-secondary">{this.props.totalcounters}</span></a>
      </nav>
    );
  }
}

export default Navbar
