import React from "react";
import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import {HomeLayout} from './index';
import { StoreProvider } from '../../../store/StoreProvider';
import { initialState, dialogReducer } from '../../../store/DialogReducer';
import Api from '../../../service/api';


describe("HomeLayout", () => {
  it("should render HomeLayout without dialogs", () => {
    const { queryByText, getByText } = render(
      <StoreProvider initialState={initialState} reducer={dialogReducer}>
        <HomeLayout/>
      </StoreProvider>);
    expect(queryByText("All Done")).not.toBeInTheDocument();
    expect(queryByText("Request an invite")).not.toBeInTheDocument();
    expect(getByText("A better way to enjoy every day")).toBeInTheDocument();
  });

  it("should render HomeLayout with click on invite button to show RequestInvite dialog", () => {
    const { getByText } = render(
      <StoreProvider initialState={initialState} reducer={dialogReducer}>
        <HomeLayout/>
      </StoreProvider>);

    fireEvent.click(getByText("Request an Invite"));
    expect(getByText("An invite form")).toBeInTheDocument();
  });

  it("should render HomeLayout with valid form to show success dialog", async () => {
    Api.requestInviteApi = jest.fn(() => Promise.resolve({}));

    const { getByText, queryByTestId } = render(
      <StoreProvider initialState={initialState} reducer={dialogReducer}>
        <HomeLayout/>
      </StoreProvider>);

    fireEvent.click(getByText("Request an Invite"));
    expect(getByText("An invite form")).toBeInTheDocument();

    const fName = screen.getByPlaceholderText("Full Name");
    const email = screen.getByPlaceholderText("Email");
    const confirmEmail = screen.getByPlaceholderText("Confirm Email");
   
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

    await waitFor(() => {
      expect(getByText("All Done")).toBeInTheDocument();
    });  
  });


});