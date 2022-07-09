export const TaskCard = ({ task, handleMarkComplete, handleDeleteTask }) => {
  return (
    !task?.isHidden && (
      <div
        data-testid="task-card"
        className="border-b p-4 shadow-lg hover:shadow-2xl transition-all"
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4 items-end">
            <div>
              <input
                data-testid="mark-checkbox"
                type="checkbox"
                onChange={() => {
                  handleMarkComplete(task?.id);
                }}
                checked={task?.isComplete}
              />
            </div>
            <div
              className={`text-lg font-semibold capitalize tracking-widest ${
                task?.isComplete && "line-through text-slate-500"
              }`}
            >
              {task?.name}
            </div>
          </div>
          <button
            onClick={() => {
              handleDeleteTask(task?.id);
            }}
            className="hover:text-slate-500 font-bold  cursor-pointer"
          >
            X
          </button>
        </div>
      </div>
    )
  );
};
