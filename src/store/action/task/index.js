import { TASK } from "../../types";
import { v4 as uuidv4 } from "uuid";

export const AddTask = ({ id = uuidv4(), name }) => {
  return (dispatch, getState) => {
    const { Task } = getState();
    const NewTask = {
      id,
      name,
      isComplete: false,
      isHidden: false,
    };
    dispatch({
      type: TASK,
      payload: [NewTask, ...Task?.Task],
    });
  };
};

export const MarkComplete = ({ id }) => {
  return (dispatch, getState) => {
    const { Task } = getState();
    const NewTaskList = Task?.Task?.map((item) => {
      if (item?.id == id) {
        return {
          ...item,
          isComplete: !item?.isComplete,
        };
      }
      return item;
    });
    dispatch({
      type: TASK,
      payload: NewTaskList,
    });
  };
};

export const DeleteTask = ({ id }) => {
  return (dispatch, getState) => {
    const { Task } = getState();
    const NewTaskList = Task?.Task?.filter((item) => {
      if (item?.id == id) {
        return;
      }
      return item;
    });
    dispatch({
      type: TASK,
      payload: NewTaskList,
    });
  };
};

export const HideTask = ({ boolean }) => {
  return (dispatch, getState) => {
    const { Task } = getState();
    const NewTaskList = Task?.Task?.map((item) => {
      if (item?.isComplete) {
        return {
          ...item,
          isHidden: boolean,
        };
      }
      return item;
    });
    dispatch({
      type: TASK,
      payload: NewTaskList,
    });
  };
};
