import { useDispatch, useSelector } from "react-redux";
import { TaskCard } from "./component/Cards/task.card";
import { Header } from "./component/Header";
import { AddTaskInputBar } from "./component/AddTask";
import { ToggleHideTask } from "./store/action/global";
import {
  AddTask,
  DeleteTask,
  HideTask,
  MarkComplete,
} from "./store/action/task";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(state);
  const AddTaskFunc = (name) => dispatch(AddTask({ name }));

  const handleMarkComplete = (id) => dispatch(MarkComplete({ id }));

  const handleDeleteTask = (id) => dispatch(DeleteTask({ id }));

  const handleHideTask = (e) => {
    dispatch(HideTask({ boolean: e.target.checked }));
    dispatch(ToggleHideTask({ boolean: e.target.checked }));
  };

  const TaskList = () => state?.Task?.Task?.filter((item) => !item?.isComplete);

  return (
    <>
      <Header
        taskGlobal={state?.Global.Hidden}
        handleHideTask={handleHideTask}
        TaskList={TaskList}
      />
      <AddTaskInputBar handleAdd={AddTaskFunc} />
      {state?.Task?.Task?.map((item, i) => (
        <TaskCard
          key={i}
          task={item}
          handleMarkComplete={handleMarkComplete}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </>
  );
}

export default App;
