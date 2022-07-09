import reducer, { intialState } from ".";
import { RESET, TASK } from "../../types";

describe(`Task Reducer`, () => {
  it(`Task`, () => {
    const ExpectedValue = {
      Task: [
        {
          id: 1,
          name: "Task1",
          isComplete: false,
          isHidden: false,
        },
      ],
    };

    const RealValue = reducer(intialState, {
      type: TASK,
      payload: [
        {
          id: 1,
          name: "Task1",
          isComplete: false,
          isHidden: false,
        },
      ],
    });

    expect(RealValue).toEqual(ExpectedValue);
  });

  it(`Reset`, () => {
    const ExpectedValue = {
      Task: [],
    };

    const RealValue = reducer(intialState, {
      type: RESET,
      payload: [
        {
          id: 1,
          name: "Task1",
          isComplete: false,
          isHidden: false,
        },
      ],
    });

    expect(RealValue).toEqual(ExpectedValue);
  });
});
