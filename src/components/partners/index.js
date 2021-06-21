import React from "react";
import { Button } from "@material-ui/core";

const divStyle = {
  textAlign: 'center',
}

const Partners = ({ testMethod }) => (
  <div style={divStyle}>
      <h3>Geo</h3>
      <Button 
        fullWidth variant="contained"
        color="primary"
        onClick={testMethod}>
              GET PARTNERS
      </Button> 
      <a href="/">Home</a>  
  </div>
);

/*function Partners () {
  return(
    <div>
      <h3>Geo</h3>
      <Button 
      fullWidth variant="contained"
      color="primary"
      onClick={testMethod}>
            GET PARTNERS
      </Button> 
      <a href="/">Home</a>
    </div>
);
}*/

export default Partners;