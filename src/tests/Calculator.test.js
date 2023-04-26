import React from "react";
import Calculator from "../containers/Calculator";
import { render, fireEvent } from "@testing-library/react";

describe("Calculator", () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />);
  });

  it("should change running total on number enter", () => {
    const button4 = container.getByTestId("number4");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("4");
  });
  it("should be able to add", () => {
    const button1 = container.getByTestId("number1");
    const button4 = container.getByTestId("number4");
    const addButton = container.getByTestId("operator-add");
    const equalButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual("5");
  });
  it("should be able to subtract", () => {
    const button7 = container.getByTestId("number7");
    const subtractButton = container.getByTestId("operator-subtract");
    const button4 = container.getByTestId("number4");
    const equalButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button7);
    fireEvent.click(subtractButton);
    fireEvent.click(button4);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual("3");
  });
  it("should be able to multiple", () => {
    const button3 = container.getByTestId("number3");
    const multipleButton = container.getByTestId("operator-multiply");
    const button5 = container.getByTestId("number5");
    const equalButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button3);
    fireEvent.click(multipleButton);
    fireEvent.click(button5);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual("15");
  });
  it("should be able to devide", () => {
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1");
    const divideButton = container.getByTestId("operator-divide");
    const button7 = container.getByTestId("number7");
    const equalButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual("3");
  });
  it("should be able to concatenate", () => {
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1");
    const button7 = container.getByTestId("number7");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual("217");
  });
  it("should be able to chain multiple operator", () => {
    const button2 = container.getByTestId("number2");
    const addButton = container.getByTestId("operator-add");
    const button1 = container.getByTestId("number1");
    const multipleButton = container.getByTestId("operator-multiply");
    const button7 = container.getByTestId("number7");
    const equalButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button2);
    fireEvent.click(addButton);
    fireEvent.click(button1);
    fireEvent.click(multipleButton);
    fireEvent.click(button7);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual("21");
  });
  it("should be able to chain multiple operator", () => {
    const button2 = container.getByTestId("number2");
    const button0 = container.getByTestId("number0");
    const addButton = container.getByTestId("operator-add");
    const button1 = container.getByTestId("number1");
    const multipleButton = container.getByTestId("operator-multiply");
    const button7 = container.getByTestId("number7");
    const equalButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button2);
    fireEvent.click(addButton);
    fireEvent.click(button1);
    fireEvent.click(equalButton);
    fireEvent.click(button0);
    fireEvent.click(multipleButton);
    fireEvent.click(button7);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual("21");
  });
  it("should be able to clear running total without affecting the calculator", () => {
    const button4 = container.getByTestId("number4");
    const divideButton = container.getByTestId("operator-divide");
    const button2 = container.getByTestId("number2");
    const equalButton = container.getByTestId("operator-equals");
    const buttonC = container.getByTestId("clear");
    const button5 = container.getByTestId("number5");
    const multipleButton = container.getByTestId("operator-multiply");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button4);
    fireEvent.click(divideButton);
    fireEvent.click(button2);
    fireEvent.click(equalButton);
    fireEvent.click(buttonC);
    fireEvent.click(button5);
    fireEvent.click(multipleButton);
    fireEvent.click(button2);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual("10");
  });
});
