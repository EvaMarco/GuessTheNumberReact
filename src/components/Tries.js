import React from 'react';
import '../scss/main.scss';

class Tries extends React.Component {
  render() {
    const counter = this.props.counter;
    return (
      <p className = "tries_text">{counter}</p>   
    );
  }
}

export default Tries;