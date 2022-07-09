import { HIDDEN } from "../../types";

export const ToggleHideTask = ({ boolean }) => {
  return (dispatch) => {
    dispatch({
      type: HIDDEN,
      payload: boolean,
    });
  };
};
