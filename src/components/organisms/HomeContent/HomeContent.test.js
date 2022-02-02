import React from "react";
import { render } from "@testing-library/react";
import {HomeContent} from './index';
import { StoreProvider } from '../../../store/StoreProvider';
import { initialState, dialogReducer } from '../../../store/DialogReducer';

describe("HomeContent", () => {
  it("should render HomeContent", () => {
    const { getByText } = render(
      <StoreProvider initialState={initialState} reducer={dialogReducer}>
        <HomeContent/>
      </StoreProvider>);

    expect(getByText("A better way to enjoy every day")).toBeInTheDocument();
    expect(getByText("Request an Invite")).toBeInTheDocument();
  });
});