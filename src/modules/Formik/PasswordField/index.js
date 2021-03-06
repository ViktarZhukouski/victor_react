import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { get } from "lodash";

const FormikPasswordField = ({ field, form, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const { errors, touched } = form;
  const error = get(touched, field.name) && get(errors, field.name);

  return (
    <TextField
      color="primary"
      error={!!error}
      variant="outlined"
      helperText={error}
      {...field}
      value={field.value || ""}
      {...props}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            
          </InputAdornment>
        ),
      }}
    />
  );
};

FormikPasswordField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
};

export default FormikPasswordField;
