import { AddTask, DeleteTask, HideTask, MarkComplete } from ".";
import { store } from "../..";

describe(`Task Action`, () => {
  it(`Add Task`, () => {
    const ExpectedValue = {
      Task: [{ id: 1, isComplete: false, isHidden: false, name: "test1" }],
    };

    store.dispatch(AddTask({ id: 1, name: "test1" }));

    const { Task } = store.getState();

    expect(Task).toEqual(ExpectedValue);
  });

  it(`Mark Completed`, () => {
    const ExpectedValue = {
      Task: [{ id: 1, isComplete: true, isHidden: false, name: "test1" }],
    };

    store.dispatch(MarkComplete({ id: 1 }));

    const { Task } = store.getState();

    expect(Task).toEqual(ExpectedValue);
  });

  it(`Hide Task`, () => {
    const ExpectedValue = {
      Task: [
        { id: 2, name: "test2", isComplete: false, isHidden: false },
        { id: 1, name: "test1", isComplete: true, isHidden: true },
      ],
    };

    store.dispatch(AddTask({ id: 2, name: "test2" }));
    store.dispatch(HideTask({ boolean: true }));

    const { Task } = store.getState();

    expect(Task).toEqual(ExpectedValue);
  });

  it(`Delete Task`, () => {
    const ExpectedValue = {
      Task: [{ id: 2, name: "test2", isComplete: false, isHidden: false }],
    };

    store.dispatch(DeleteTask({ id: 1 }));

    const { Task } = store.getState();

    expect(Task).toEqual(ExpectedValue);
  });
});
