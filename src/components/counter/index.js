import React from 'react';
import TextField from '@material-ui/core/TextField';

const divStyle = {
    textAlign: 'center',
  }
  

const Register = ({currentValue, allReset, changeDisplayFormStatus, displayForm,
    handleIncrementPlus, handleDecrementPlus, currentThingPlus, 
    handleIncrementMinus, handleDecrementMinus, currentThingMinus,
    sumPlusMinus}) => (
              
    <div style={divStyle}>   
            <button className='Start' onClick={changeDisplayFormStatus}>Show/Hide</button>
            <button className='allRes' onClick={allReset}>Reset</button>
        <section>
            <TextField label="Your cash"/>
            <div>{currentValue}</div>
        </section>

        {displayForm &&
            <form>
                
                <TextField label="thing First"/>
                <div>{currentThingPlus}</div>
            </form>
        }
                <button onClick={handleIncrementPlus}>+</button>
                <button onClick={handleDecrementPlus}>-</button>  
        {displayForm &&
            <form>
                
                <TextField label="thing Last"/>
                <div>{currentThingMinus}</div>
            </form>
            }
                <button onClick={handleIncrementMinus}>+</button>
                <button onClick={handleDecrementMinus}>-</button>
        {displayForm &&
            <form>    
                
                <TextField label="Your clicks"/>
                <div>{sumPlusMinus}</div>
            </form>
        }
        <hr/>
        <a href="/">Home</a>
    </div>  
    );
    
export default Register;


        
      
