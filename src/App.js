import React from 'react';
import './scss/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.checkNumbers = this.checkNumbers.bind(this);
    this.getUserNumber = this.getUserNumber.bind(this);
    this.clue = 'Escribe un número y dale a prueba';
    this.RandomNumber = this.getRandomNumber(100);
    this.ValueNumber = 0;
    this.Counter = 0;
    console.log('r', this.RandomNumber);
  }
  getRandomNumber(max) {
    const number = Math.ceil(Math.random() * max);
    return number
  }

  getUserNumber(event){
    const valueNumber = parseInt(event.target.value);
    this.ValueNumber = valueNumber;
  }

  checkNumbers(){
    const ValueNumber = this.ValueNumber;
    const RandomNumber =this.RandomNumber;
    let Counter = this.Counter;
    let result;

    if(ValueNumber < RandomNumber){
      result = 'El número que has introducido es muy pequeño, introduce un número mayor.';
      Counter ++;
    }
    else if(ValueNumber > RandomNumber){ 
      result =  'El número que has introducido es muy grande, introduce un número menor.';
      Counter ++;
    }
    else{
      result = 'Has acertado campeona';
    }
    this.clue = result;
    this.Counter = Counter;
    this.forceUpdate();
  }

  render() {
    const checkNumbers = this.checkNumbers;
    const getUserNumber = this.getUserNumber;
    return (
      <div className="App">
        <h1 className = "main__title">
          Adivina el número
        </h1>
        <p className = "tries_text" >{this.Counter}</p>    
        <div className="InputDiv">
          <label htmlFor = "input" className = "main__subtitle">
            Introduce aquí tu número.
          </label>
          <input
            type="number"
            name="input"
            id="input"
            className="input js__input"
            onChange = {getUserNumber}
          />
          <button className="btn js__btn" onClick={checkNumbers}>
            Prueba
          </button>
        </div>
        <p className="resultText">{this.clue}</p>
      </div>
    );
  }
}

export default App;
