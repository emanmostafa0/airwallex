
import React, {useState} from 'react';
import {Button} from '../../atoms/Button';
import {Input} from '../../atoms/Input';
import { validateConfirmEmail, validateEmail, validateFName, errorMessages } from '../../../helpers/validations';
import Api from "../../../service/api";
import { OPENSUCCESS } from '../../../store/actionTypes';
import { useStore } from '../../../store/StoreProvider';
import {StyledErrorMessage, StyledAction} from './style';

export function UserForm() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmEmailValid, setConfirmEmailValid] = useState(true);

  const [fname, setFname] = useState("");
  const [fnameValid, setFnameValid] = useState(true);

  const [errorSubmit, setErrorSubmit] = useState('');

  const [buttonLabel, setButtonLabel] = useState('submit');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [ globalState, dispatch ] = useStore();

  const updateForm = (input, type) => {
    switch (type) {
    case "email":
      setEmail(input);
      setEmailValid(validateEmail(input));

      if(confirmEmail)
        setConfirmEmailValid(validateConfirmEmail( input, confirmEmail ));
      return;
    case "confirmEmail":
      setConfirmEmail(input);
      setConfirmEmailValid(validateConfirmEmail( email,input ));
      return;
    case "fname":
      setFname(input);
      setFnameValid(validateFName(input));
      return;
    default:
      return;
    }
  };

  const checkFormValid = () => {
    const validField = false;
    let areValidFields = true;

    if (!fname || !fnameValid) {
      setFnameValid(validField);
      areValidFields = validField;
    }

    if (!email || !emailValid) {
      setEmailValid(validField);
      areValidFields = validField;
    }

    if (!confirmEmail || !confirmEmailValid) {
      setConfirmEmailValid(validField);
      areValidFields = validField;
    }
   
    return areValidFields;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorSubmit('');
    const isValidForm = checkFormValid();
    if (isValidForm) {
      setButtonLabel("sending ...");
      setButtonDisabled(true);
      await Api.requestInviteApi( { name: fname, email: email} )
        .then((data) => {
          if(data?.errorMessage) { 
            setErrorSubmit(data?.errorMessage);
            setButtonLabel("submit");
            setButtonDisabled(false);
          }
          else dispatch({ type: OPENSUCCESS , payload: !globalState?.successOpen });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      
      return true;
    }
    return false;
  };


  return (
    <div >
      <Input label="Full Name" type="text" name="fname" placeHolder="Full Name" 
        onChange={(e) => updateForm(e.target.value, "fname")}
        validationMassage={!fnameValid ? errorMessages['fName']: ''}>
      </Input>

      <Input label="Email" type="email" name="email" placeHolder="Email" 
        onChange={(e) => updateForm(e.target.value, "email")}
        validationMassage={!emailValid ? errorMessages['email']: ''}>
      </Input>

      <Input label="Confirm Email" type="email" name="confirm-email" placeHolder="Confirm Email" 
        onChange={(e) => updateForm(e.target.value, "confirmEmail")}
        validationMassage={!confirmEmailValid ? errorMessages['confirmEmail']: ''}>
      </Input>

      <StyledAction>
        <Button onClick={handleSubmit} label={buttonLabel} disable={buttonDisabled}></Button>
   
        {errorSubmit && <StyledErrorMessage  data-testid="errorSubmit" >{ errorSubmit }</StyledErrorMessage> }
      </StyledAction>
    </div>
  );
}
