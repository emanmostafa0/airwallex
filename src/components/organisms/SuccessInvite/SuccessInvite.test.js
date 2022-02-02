import React from "react";
import { render } from "@testing-library/react";
import {SuccessInvite} from './index';
import { StoreProvider } from '../../../store/StoreProvider';
import { initialState, dialogReducer } from '../../../store/DialogReducer';

describe("SuccessInvite", () => {
  it("should render SuccessInvite without render dialog", () => {
    const { queryByText } = render(
      <StoreProvider initialState={initialState} reducer={dialogReducer}>
        <SuccessInvite/>
      </StoreProvider>);
    expect(queryByText("All Done")).not.toBeInTheDocument();
  });

  it("should render SuccessInvite with render dialog", () => {
    initialState.successOpen = true;
    const { getByText } = render(
      <StoreProvider initialState={initialState} reducer={dialogReducer}>
        <SuccessInvite/>
      </StoreProvider>);
    expect(getByText("All Done")).toBeInTheDocument();
  });

});