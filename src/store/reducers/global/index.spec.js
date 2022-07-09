import reducer, { intialState } from ".";
import { HIDDEN } from "../../types";

describe(`Global Reducer`, () => {
  it(`Global Toggle Should not pass`, () => {
    const ExpectedValue = {
      Hidden: false,
    };

    const RealValue = reducer(intialState, {
      type: HIDDEN,
      payload: false,
    });

    expect(RealValue).toEqual(ExpectedValue);
  });
});
