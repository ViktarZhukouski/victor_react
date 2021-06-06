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


export default Register;
