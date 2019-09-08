import React from 'react';
import './scss/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.checkNumbers = this.checkNumbers.bind(this);
    this.getUserName = this.getUserName.bind(this);
    this.state = {
      clue : 'Escribe un número y dale a prueba',
      RandomNumber : this.getRandomNumber(100),
      ValueNumber : 0,
      counter : 0
    }
    console.log('r', this.state.RandomNumber);
  }
  getRandomNumber(max) {
    const number = Math.ceil(Math.random() * max);
    return number
  }

  getUserName(event){
    const valueNumber = parseInt(event.target.value);
    this.setState(
      {
        ValueNumber: valueNumber
      }
    );
  }

  checkNumbers(){
    const ValueNumber = this.state.ValueNumber;
    const RandomNumber =this.state.RandomNumber;
    let counter = this.state.counter;
    let result;

    if(ValueNumber < RandomNumber){
      result = 'El número que has introducido es muy pequeño, introduce un número mayor.';
      counter ++;
    }
    else if(ValueNumber > RandomNumber){ 
      result =  'El número que has introducido es muy grande, introduce un número menor.';
      counter ++;
    }
    else{
      result = 'Has acertado campeona';
    }

    this.setState({
      clue: result,
      counter: counter
    })
  }

  render() {
    const checkNumbers = this.checkNumbers;
    const getUserName = this.getUserName;
    return (
      <div className="App">
        <h1 className = "main__title">
          Adivina el número
        </h1>
        <p className = "tries_text" >{this.state.counter}</p>    
        <div className="InputDiv">
          <label htmlFor = "input" className = "main__subtitle">
            Introduce aquí tu número.
          </label>
          <input
            type="number"
            name="input"
            id="input"
            className="input js__input"
            onChange = {getUserName}
          />
          <button className="btn js__btn" onClick={checkNumbers}>
            Prueba
          </button>
        </div>
        <p className="resultText">{this.state.clue}</p>
      </div>
    );
  }
}

export default App;
