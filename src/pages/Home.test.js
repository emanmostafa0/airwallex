import React from "react";
import { render } from "@testing-library/react";
import { StoreProvider } from '../store/StoreProvider';
import { initialState, dialogReducer } from '../store/DialogReducer';
import Home from './index';


describe("Home", () => {
  it("should render Home", () => {
    const { container, getByText, queryByText } = render(
      <StoreProvider initialState={initialState} reducer={dialogReducer}>
        <Home/>
      </StoreProvider>);

    expect(container.querySelector("img[alt*='logo']")).toBeInTheDocument();
    expect(getByText("A better way to enjoy every day")).toBeInTheDocument();
    expect(getByText("Follow us on")).toBeInTheDocument();

    expect(queryByText("All Done")).not.toBeInTheDocument();
    expect(queryByText("Request an invite")).not.toBeInTheDocument();

  });

});