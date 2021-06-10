import React from 'react';
import Register from '../components/counter';

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: 0,
            displayForm: false,
            currentThingPlus: 0,
            currentThingMinus: 0,
            sumPlusMinus: 0,
        };
        this.changeDisplayFormStatus = this.changeDisplayFormStatus.bind(this)
        this.allReset = this.allReset.bind(this)
        this.handleIncrementPlus = this.handleIncrementPlus.bind(this)
        this.handleDecrementPlus = this.handleDecrementPlus.bind(this)
        this.handleIncrementMinus = this.handleIncrementMinus.bind(this)
        this.handleDecrementMinus = this.handleDecrementMinus.bind(this)
        
    }

    changeDisplayFormStatus() {
            
        this.setState({
            displayForm: !this.state.displayForm,
        });
    }

    allReset() {
        this.setState({
            currentValue: 0,
            currentThingPlus: 0,
            currentThingMinus: 0,
            sumPlusMinus: 0,
        });
    }

    handleIncrementPlus() {
        this.setState({
            currentValue: this.state.currentValue + 1,
            currentThingPlus: this.state.currentThingPlus + 1,
            sumPlusMinus: this.state.sumPlusMinus + 1,
        });
        
    }

    handleDecrementPlus() {
        this.setState({
            currentValue: this.state.currentValue - 1,
            currentThingPlus: this.state.currentThingPlus - 1,
            sumPlusMinus: this.state.sumPlusMinus + 1,
        });
    }

    handleIncrementMinus() {
        this.setState({
            currentValue: this.state.currentValue + 1,
            currentThingMinus: this.state.currentThingMinus + 1,
            sumPlusMinus: this.state.sumPlusMinus + 1,
        });
    }

    handleDecrementMinus() {
        this.setState({
            currentValue: this.state.currentValue - 1,
            currentThingMinus: this.state.currentThingMinus - 1,
            sumPlusMinus: this.state.sumPlusMinus + 1,
        });
    }
    


render() {
    if (this.state.currentThingPlus < 0) {
        this.setState({
            currentThingPlus: 0,
        })
    }

    if (this.state.currentThingMinus < 0) {
        this.setState({
            currentThingMinus: 0,
        })
    }

    if (this.state.currentValue < 0) {
        this.setState({
            currentValue: 0,
        })
    }
    

    return (
    <Register 
        currentValue={this.state.currentValue}
        displayForm={this.state.displayForm}
        changeDisplayFormStatus={this.changeDisplayFormStatus}
        handleIncrementPlus={this.handleIncrementPlus} 
        handleDecrementPlus={this.handleDecrementPlus}
        currentThingPlus={this.state.currentThingPlus}
        handleIncrementMinus={this.handleIncrementMinus} 
        handleDecrementMinus={this.handleDecrementMinus}
        currentThingMinus={this.state.currentThingMinus}
        sumPlusMinus={this.state.sumPlusMinus}
        allReset={this.allReset}
    />
    );
    
}

}

export default RegisterContainer;