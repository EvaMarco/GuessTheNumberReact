import React from 'react';
import '../scss/main.scss';

class Input extends React.Component {
  render() {
    const fieldAction = this.props.fieldAction;
    const buttonAction = this.props.buttonAction;
    return (
      <div className="InputDiv">
      <label htmlFor = "input" className = "main__subtitle">
        Introduce aquí tu número.
      </label>
      <input
        type="number"
        name="input"
        id="input"
        className="input js__input"
        onChange = {fieldAction}
      />
      <button className="btn js__btn" onClick={buttonAction}>
        Prueba
      </button>
    </div>
    );
  }
}

export default Input;
