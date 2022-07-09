export const Header = ({ handleHideTask, taskGlobal, TaskList }) => {
  const Task = TaskList();
  return (
    <>
      <header
        data-testid="header"
        className="bg-gradient-to-b from-[#d3ecfa] to-[#e1e7f2] p-3 mb-3 bg-white"
      >
        <div className="flex flex-row justify-between items-center">
          <h2 data-testid="list" className="my-0 mr-md-auto text-2xl font-bold	">
            Todo List ({Task?.length})
          </h2>
          <div className="flex flex-row gap-4">
            <input
              checked={taskGlobal}
              className=""
              type="checkbox"
              onChange={handleHideTask}
            />
            <div className="text-sm font-semibold">Hide Completed Task</div>
          </div>
        </div>
      </header>
    </>
  );
};
