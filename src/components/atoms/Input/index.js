import React from 'react';
import { func, string } from "prop-types";
import { StyledLabel, StyledInput, StyledInputContainer, StyledValidationError} from './style';

export function Input({label, type, name, placeHolder, onChange, validationMassage}) {
  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={type} > {label}: 
        <StyledInput type={type} name={name} placeholder={placeHolder} 
          onChange={onChange} data-testid="input" ></StyledInput>
      </StyledLabel>
      { validationMassage && <StyledValidationError> {validationMassage} </StyledValidationError> }
    </StyledInputContainer>
  );
}


Input.propTypes = {
  onChange: func,
  label: string,
  name: string,
  type: string, 
  placeHolder: string, 
  validationMassage: string
};