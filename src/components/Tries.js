import React from 'react';
import '../scss/main.scss';
class Tries extends React.Component {

  render() {
    const counterValue = this.props.counterValue
    return (
      <p className = "tries_text" >{counterValue}</p>
    );
  }
}

export default Tries;