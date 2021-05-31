import React from 'react';
import TextField from '@material-ui/core/TextField'

const Register = ({handleIncrement, handleDecrement, currentValue, 
    changeDisplayFormStatus, displayForm, currentPlus, currentMinus,
    sumPlusMinus, allReset}) => (
    <div>
        <div>{currentValue}</div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button className='Info' onClick={changeDisplayFormStatus}>Info</button>
        <button className='allReset' onClick={allReset}>Reset</button>
    {displayForm &&
        <form>
    <TextField label="Pushed +"/>
    <div>{currentPlus}</div>
    <TextField label="Pushed -"/>
    <div>{currentMinus}</div>
    <TextField label="Pushed + and -"/>
    <div>{sumPlusMinus}</div>
        </form>
    }
      </div>  
    );
let allResetButton = document.querySelector('.allReset')
allResetButton.style.background = 'red'
allResetButton.style.margin = '10px'
allResetButton.style.color = 'rgb(10,240,240)'
allResetButton.style.padding = '5px'

let infoButton = document.querySelector('.Info')
infoButton.style.background = 'lime'
infoButton.style.margin = '10px'
infoButton.style.padding = '5px'
export default Register;
