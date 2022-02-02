import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {Input} from './index';

describe("Input", () => {
  it("should render input without error message", () => {
    const { getByTestId } = render(<Input label="email" type="email" />);
    expect(getByTestId("input")).toBeInTheDocument();
  });

  it("should execute onchange function", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Input label="email" type="email" onChange={onChange}/>);

    expect(onChange).toHaveBeenCalledTimes(0);
    fireEvent.change(getByTestId("input"), { target: { value: "test" } });
    fireEvent.blur(getByTestId("input"));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should validation error appear", () => {
    const { getByText } = render(<Input label="email" type="email" validationMassage="error"/>);
    expect(getByText("error")).toBeInTheDocument();
  });
});
