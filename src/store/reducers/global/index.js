import { HIDDEN } from "../../types";

export const intialState = {
  Hidden: false,
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case HIDDEN: {
      return {
        ...state,
        Hidden: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducer;
