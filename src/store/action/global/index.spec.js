import { ToggleHideTask } from ".";
import { store } from "../..";

describe(`Global Action`, () => {
  it(`Toggle Value`, () => {
    const ExpectedValue = { Hidden: true };

    store.dispatch(ToggleHideTask({ boolean: true }));

    const { Global } = store.getState();

    expect(Global).toEqual(ExpectedValue);
  });
});
