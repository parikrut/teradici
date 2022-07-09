import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { TaskCard } from "./task.card";

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

  //   it(`Mark Complete Function`, () => {
  //     const handleMarkComplete = (id) => id;
  //     render(
  //       <TaskCard task={SampleTask} handleMarkComplete={handleMarkComplete} />
  //     );

  //     const MarkCheckBox = screen.getByTestId("mark-checkbox");

  //     const output = user.click(MarkCheckBox);
  //     expect(handleMarkComplete).toHaveBeenCalled();
  //   });

  it(`Not Render Task Card`, () => {
    SampleTask.isHidden = true;

    render(<TaskCard task={SampleTask} />);

    const Card = screen.queryByTestId("task-card");

    expect(Card).not.toBeInTheDocument();
  });
});
