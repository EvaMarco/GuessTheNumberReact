import React from 'react';
import '../scss/main.scss';
class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className="resultText">Introduce un número y dale a Prueba</p>
    );
  }
}

export default Result;