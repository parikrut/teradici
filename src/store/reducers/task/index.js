import { TASK, RESET } from "../../types";

export const intialState = {
  Task: [],
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case TASK: {
      return {
        ...state,
        Task: action.payload,
      };
    }
    case RESET: {
      return {
        ...state,
        Task: [],
      };
    }
    default:
      return state;
  }
};
export default reducer;
