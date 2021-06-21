import React from "react";
import Register from "../components/register";
import { connect } from "react-redux";
import { regRequest } from "../actions/index";


class RegisterContain extends React.Component {
  
  testMethod = () => {
    console.log("Button has been pressed!!");
    this.props.regRequest("PAYLOAD from test method");
  };
  
  render() {
    const initialFormValues = {
      email: "",
      firstName: "",
      secondName: "",
    };
    const OnRegisterUser = (register) => {
      console.log("Params: ", register);
      console.log("firstName:", register.firstName);
      console.log("firstName trim:", register.firstName.trim());
    };

    return (<Register 
    initialFormValues={initialFormValues} 
    onRegister={OnRegisterUser}
    testMethod={this.testMethod}
    />
    );
  }
}

const mapStateToProps = (state) => {
  return;
};

const mapDispatchToProps = (dispatch) => {
  return {
    regRequest: (value) => dispatch(regRequest(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContain);
