import React from 'react';
import '../scss/main.scss';
class Result extends React.Component {
  render() {
    const clueValue = this.props.clueValue
    return (
      <p className="resultText">{clueValue}</p>
    );
  }
}

export default Result;