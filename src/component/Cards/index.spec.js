import { render, screen, waitFor, rerender } from "@testing-library/react";
import user from "@testing-library/user-event";
import { TaskCard } from "./task.card";
import { store } from "../../store";
import { AddTask, DeleteTask, MarkComplete } from "../../store/action/task";

describe(`<TaskCard />`, () => {
  const SampleTask = {
    id: 1,
    isComplete: false,
    isHidden: false,
    name: "test1",
  };

  it(`Render Task Card`, () => {
    render(<TaskCard task={SampleTask} />);
    const Card = screen.getByTestId("task-card");
    expect(Card).toBeInTheDocument();
  });

  it(`Match Value`, () => {
    render(<TaskCard task={SampleTask} />);
    const Card = screen.getByText("test1");
    expect(Card).toBeInTheDocument();
  });

  it(`Mark Complete Function`, () => {
    const handleMarkComplete = (id) => store.dispatch(MarkComplete({ id }));
    store.dispatch(AddTask(SampleTask));
    render(
      <TaskCard task={SampleTask} handleMarkComplete={handleMarkComplete} />
    );

    const MarkCheckBox = screen.getByTestId("mark-checkbox");
    user.click(MarkCheckBox);
    const { Task } = store.getState();

    expect(Task?.Task).toEqual([
      { id: 1, name: "test1", isComplete: true, isHidden: false },
    ]);
  });

  it(`Check Line Through`, () => {
    const { Task } = store.getState();
    render(<TaskCard task={Task?.Task[0]} />);

    const RenderLineThrough = screen.getByTestId("line-through");
    expect(RenderLineThrough).toHaveClass("line-through text-slate-500");
  });

  it(`Mark Delete Function`, () => {
    const handleDeleteTask = (id) => store.dispatch(DeleteTask({ id }));
    store.dispatch(AddTask(SampleTask));
    render(<TaskCard task={SampleTask} handleDeleteTask={handleDeleteTask} />);
    rerender;
    const DeleteButtonTask = screen.getByTestId("delete-task-button");
    user.click(DeleteButtonTask);
    const { Task } = store.getState();
    expect(Task?.Task).toEqual([]);
  });

  it(`Not Render Task Card`, () => {
    SampleTask.isHidden = true;

    render(<TaskCard task={SampleTask} />);

    const Card = screen.queryByTestId("task-card");

    expect(Card).not.toBeInTheDocument();
  });
});
