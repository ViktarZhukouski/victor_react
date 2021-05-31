import React from 'react';
import Register from '../components';

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: 0,
            displayForm: false,
            currentPlus: 0,
            currentMinus: 0,
            sumPlusMinus: 0,
        };
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
        this.changeDisplayFormStatus = this.changeDisplayFormStatus.bind(this)
        this.allReset = this.allReset.bind(this)
    }

    handleIncrement() {
        console.log('incr');
        this.setState({
            currentValue: this.state.currentValue + 1,
            currentPlus: this.state.currentPlus + 1,
            sumPlusMinus: this.state.sumPlusMinus + 1,
        });
    }

    handleDecrement() {
        console.log('decr');
        this.setState({
            currentValue: this.state.currentValue - 1,
            currentMinus: this.state.currentMinus + 1,
            sumPlusMinus: this.state.sumPlusMinus + 1,
        });
    }
    
    changeDisplayFormStatus() {
            
        this.setState({
            displayForm: !this.state.displayForm,
        });
    }

    allReset() {
        this.setState({
            currentValue: 0,
            currentPlus: 0,
            currentMinus: 0,
            sumPlusMinus: 0,
        });
    }

render() {
    return (
    <Register 
        handleIncrement={this.handleIncrement} 
        handleDecrement={this.handleDecrement} 
        currentValue={this.state.currentValue}
        displayForm={this.state.displayForm}
        changeDisplayFormStatus={this.changeDisplayFormStatus}
        currentPlus={this.state.currentPlus}
        currentMinus={this.state.currentMinus}
        sumPlusMinus={this.state.sumPlusMinus}
        allReset={this.allReset}
    />
    );
    
}

}

export default RegisterContainer