import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { AddTaskInputBar } from ".";

describe(`<AddTaskInputBar />`, () => {
  const RenderAddTaskInputBarhBar = (props = {}) =>
    render(<AddTaskInputBar {...props} />);

  const inputbar = () => screen.getByTestId("taskbar");

  it(`Render Task Bar`, () => {
    RenderAddTaskInputBarhBar();
    expect(inputbar()).toBeInTheDocument();
  });

  it(`type Task Bar`, () => {
    RenderAddTaskInputBarhBar();
    user.type(inputbar(), "test1");
    expect(inputbar()).toHaveValue("test1");
  });

  it(`Handle onKeyDown`, () => {
    const handleAdd = jest.fn();
    render(<AddTaskInputBar handleAdd={handleAdd} />);

    fireEvent.keyDown(inputbar(), {
      key: "Enter",
      code: "Enter",
    });
    expect(inputbar()).toHaveValue("");
  });
});
