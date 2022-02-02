import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import {UserForm} from './index';
import { StoreProvider } from '../../../store/StoreProvider';
import { initialState, dialogReducer } from '../../../store/DialogReducer';
import {errorMessages} from '../../../helpers/validations';
import Api from '../../../service/api';


describe("userForm", () => {
  it("should render UserForm", () => {
    const { container } = render(
      <StoreProvider initialState={initialState} reducer={dialogReducer}>
        <UserForm/>
      </StoreProvider>);
    expect(container.querySelector("input[placeholder='Full Name']")).toBeInTheDocument();
    expect(container.querySelector("input[placeholder='Email']")).toBeInTheDocument();
    expect(container.querySelector("input[placeholder='Confirm Email']")).toBeInTheDocument();
  });

  it("change inputs with valid inputs UserForm", async () => {
  
    const { container, getByText, queryByTestId} = render(
      <StoreProvider initialState={initialState} reducer={dialogReducer}>
        <UserForm/>
      </StoreProvider>);

    const fName = container.querySelector("input[placeholder='Full Name']");
    const email = container.querySelector("input[placeholder='Email']");
    const confirmEmail = container.querySelector("input[placeholder='Confirm Email']");

    fireEvent.change(fName, { target: { value: "eman" } });
    fireEvent.blur(fName);

    fireEvent.change(email, { target: { value: "e@e.com" } });
    fireEvent.blur(email);

    fireEvent.change(confirmEmail, { target: { value: "e@e.com" } });
    fireEvent.blur(confirmEmail);
    fireEvent.click(getByText("submit"));
    expect(getByText('sending ...')).toBeInTheDocument();

    await waitFor(() => {
      expect(queryByTestId("errorSubmit")).not.toBeInTheDocument();
    });  

  });

  it("change inputs with not valid inputs UserForm", () => {
    const { container, getByText } = render(
      <StoreProvider initialState={initialState} reducer={dialogReducer}>
        <UserForm/>
      </StoreProvider>);

    const fName = container.querySelector("input[placeholder='Full Name']");
    const email = container.querySelector("input[placeholder='Email']");
    const confirmEmail = container.querySelector("input[placeholder='Confirm Email']");

    fireEvent.change(fName, { target: { value: "e" } });
    fireEvent.blur(fName);

    fireEvent.change(email, { target: { value: "e.com" } });
    fireEvent.blur(email);

    fireEvent.change(confirmEmail, { target: { value: "e.com" } });
    fireEvent.blur(confirmEmail);
    fireEvent.click(getByText("submit"));
    expect(getByText(errorMessages['fName'])).toBeInTheDocument();
    expect(getByText(errorMessages['email'])).toBeInTheDocument();
    expect(getByText(errorMessages['confirmEmail'])).toBeInTheDocument();
  });

  it("change inputs with usedEmail@airwallex.com UserForm", async () => {
    Api.requestInviteApi = jest.fn(() => Promise.resolve({errorMessage: 'user exists'}));
    const { container, getByText, getByTestId} = render(
      <StoreProvider initialState={initialState} reducer={dialogReducer}>
        <UserForm/>
      </StoreProvider>);

    const fName = container.querySelector("input[placeholder='Full Name']");
    const email = container.querySelector("input[placeholder='Email']");
    const confirmEmail = container.querySelector("input[placeholder='Confirm Email']");

    fireEvent.change(fName, { target: { value: "eman" } });
    fireEvent.blur(fName);

    fireEvent.change(email, { target: { value: "usedEmail@airwallex.com" } });
    fireEvent.blur(email);

    fireEvent.change(confirmEmail, { target: { value: "usedEmail@airwallex.com" } });
    fireEvent.blur(confirmEmail);
    fireEvent.click(getByText("submit"));
    expect(getByText('sending ...')).toBeInTheDocument();
  
    await waitFor(() => {
      expect(getByTestId("errorSubmit")).toBeInTheDocument();
    });  

  });

});