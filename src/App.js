import React from 'react';
import './scss/main.scss';
import Input from './components/Input';
import Tries from './components/Tries';
import Result from './components/Result';

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
        <Tries 
        counterValue = {this.state.counter}
        />
        <Input 
          fieldAction = {getUserName}
          buttonAction = {checkNumbers}
        />    
        <Result clueValue = {this.state.clue} />
      </div>
    );
  }
}

export default App;
