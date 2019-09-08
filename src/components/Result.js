import React from 'react';
import '../scss/main.scss';

class Result extends React.Component {
  render() {
    const clue = this.props.clue
    return (
      <p className="resultText">{clue}</p>
    );
  }
}

export default Result;