import React from "react";
import Partners from "../components/partners";
import { connect } from "react-redux";
import { getPartners } from "../actions/index";


class PartnerContainer extends React.Component {
  
  testMethod = () => {
    console.log("Button has been pressed!!");
    this.props.getPartners("PAYLOAD from test method");
  };
  
  render() {

    return (
        <Partners 
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
    getPartners: (value) => dispatch(getPartners(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PartnerContainer);
