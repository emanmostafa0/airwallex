import React from "react";
import { render } from "@testing-library/react";
import {RequestInvite} from './index';
import { StoreProvider } from '../../../store/StoreProvider';
import { initialState, dialogReducer } from '../../../store/DialogReducer';

describe("RequestInvite", () => {
  it("should render RequestInvite without render dialog", () => {
    const { queryByText } = render(
      <StoreProvider initialState={initialState} reducer={dialogReducer}>
        <RequestInvite/>
      </StoreProvider>);
    expect(queryByText("An invite form")).not.toBeInTheDocument();
  });

  it("should render RequestInvite with render dialog", () => {
    initialState.requestOpen = true;
    const { getByText } = render(
      <StoreProvider initialState={initialState} reducer={dialogReducer}>
        <RequestInvite/>
      </StoreProvider>);
    expect(getByText("An invite form")).toBeInTheDocument();
  });

});