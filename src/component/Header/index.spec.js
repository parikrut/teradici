import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe(`<Header />`, () => {
  const SampleTask = [
    {
      id: 1,
      isComplete: true,
      isHidden: false,
      name: "test1",
    },
    {
      id: 2,
      isComplete: false,
      isHidden: false,
      name: "test2",
    },
  ];

  const TaskList = () => SampleTask.filter((item) => !item?.isComplete);

  it(`Render Header`, () => {
    render(<Header TaskList={TaskList} />);
    const component = screen.getByTestId("header");
    expect(component).toBeInTheDocument();
  });

  it(`Check List`, () => {
    render(<Header TaskList={TaskList} />);
    const component = screen.getByTestId("list");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("Todo List (1)");
  });

  it(`Check List Pop`, () => {
    SampleTask.pop();
    render(<Header TaskList={TaskList} />);
    const component = screen.getByTestId("list");
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("Todo List (0)");
  });
});
