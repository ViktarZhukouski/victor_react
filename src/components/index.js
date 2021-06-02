import React from 'react';
import TextField from '@material-ui/core/TextField'

const Register = ({currentValue, allReset, changeDisplayFormStatus, displayForm,
    handleIncrementPlus, handleDecrementPlus, currentThingPlus, 
    handleIncrementMinus, handleDecrementMinus, currentThingMinus,
    sumPlusMinus}) => (
    <div>   
            <button className='Start' onClick={changeDisplayFormStatus}>Show/Hide</button>
            <button className='allRes' onClick={allReset}>Reset</button>
        <section>
            <TextField label="Your things"/>
            <div>{currentValue}</div>
        </section>

        {displayForm &&
            <form>
                <p>-------------------------------------------------</p>
                <TextField label="thing First"/>
                <div>{currentThingPlus}</div>
            </form>
        }
                <button onClick={handleIncrementPlus}>+</button>
                <button onClick={handleDecrementPlus}>-</button>  
        {displayForm &&
            <form>
                <p>-------------------------------------------------</p>
                <TextField label="thing Last"/>
                <div>{currentThingMinus}</div>
            </form>
            }
                <button onClick={handleIncrementMinus}>+</button>
                <button onClick={handleDecrementMinus}>-</button>
        {displayForm &&
            <form>    
                <p>-------------------------------------------------</p>
                <TextField label="Your clicks"/>
                <div>{sumPlusMinus}</div>
            </form>
        }
        
    </div>  
    );
let allResetButton = document.querySelector('.allRes')
allResetButton.style.background = 'red'
allResetButton.style.margin = '10px'
allResetButton.style.color = 'rgb(10,240,240)'
allResetButton.style.padding = '5px'
allResetButton.style.border = 'none'
allResetButton.style.borderRadius = '15px'

let startButton = document.querySelector('.Start')
startButton.style.background = 'lime'
startButton.style.margin = '10px'
startButton.style.padding = '5px'

export default Register;
