import { store } from ".";

describe(`state`, () => {
  it(`Initial State`, () => {
    expect(store.getState()).toEqual({
      Task: { Task: [] },
      Global: { Hidden: false },
      _persist: { version: -1, rehydrated: true },
    });
  });
});
