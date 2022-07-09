import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from ".";
import { store } from "../../store";
import { ToggleHideTask } from "../../store/action/global";
import { AddTask, HideTask, MarkComplete } from "../../store/action/task";

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

  it(`Hide Task`, () => {
    const SampleList = {
      id: 1,
      isComplete: true,
      isHidden: false,
      name: "test1",
    };
    const TaskList = () => [SampleList];

    store.dispatch(AddTask(SampleList));
    store.dispatch(MarkComplete({ id: 1 }));

    const handleHideTask = (e) => {
      store.dispatch(HideTask({ boolean: e.target.checked }));
      store.dispatch(ToggleHideTask({ boolean: e.target.checked }));
    };

    render(<Header TaskList={TaskList} handleHideTask={handleHideTask} />);
    const component = screen.getByTestId("hide-task");
    userEvent.click(component);

    expect(component).toBeChecked();
    const { Task } = store.getState();
    expect(Task?.Task).toEqual([
      { id: 1, name: "test1", isComplete: true, isHidden: true },
    ]);
  });
});
