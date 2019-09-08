import React from 'react';
import './scss/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      message : 'Escribe un número y dale a prueba',
      RandomNumber : 45,
      ValueNumber : 0
    }
  }
  // getRandomNumber(max) {
  //   const number = Math.ceil(Math.random() * max);
  //   this.setState({
  //     RandomNumber: number
  //   });
  //   console.log(number);
  // }

  handleChange(event){
    const valueNumber = parseInt(event.target.value);
    this.setState(
      {
        ValueNumber: valueNumber
      }
    );
    console.log(valueNumber);
  }

  handleClick(){
    const ValueNumber = this.state.ValueNumber;
    const RandomNumber =this.state.RandomNumber;

    if(ValueNumber < RandomNumber){
      console.log(ValueNumber);
      console.log(RandomNumber);
      console.log('soy mayor');
      this.setState(
        {
          message : 'El número que has introducido es muy pequeño, introduce un número mayor.'
        }
      );
    }
    else if(ValueNumber > RandomNumber){ 
      console.log(ValueNumber);
      console.log(RandomNumber);       
      console.log('soy menor');
      this.setState(
        {
          message : 'El número que has introducido es muy grande, introduce un número menor.'
        }
      );
    }
    else{
      console.log(ValueNumber);
      console.log(RandomNumber);
      console.log('Has ganado');
      this.setState(
        {
          message : 'Has acertado campeona'
        }
      );
    }
  }

  render() {
    // this.getRandomNumber(100);
    const handleClick = this.handleClick;
    const handleChange = this.handleChange;
    return (
      <div className="App">
        <h1 className = "main__title">
          Adivina el número
        </h1>
        <p className = "tries_text" >0</p>    
        <div className="InputDiv">
          <label htmlFor = "input" className = "main__subtitle">
            Introduce aquí tu número.
          </label>
          <input
            type="number"
            name="input"
            id="input"
            className="input js__input"
            onChange = {handleChange}
          />
          <button className="btn js__btn" onClick={handleClick}>
            Prueba
          </button>
        </div>
        <p className="resultText">{this.state.message}</p>
      </div>
    );
  }
}

export default App;
