import { useState } from "react";

export const AddTaskInputBar = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setText("");
      handleAdd(text);
    }
  };
  return (
    <input
      data-testid="taskbar"
      value={text}
      className="text-sm block w-full px-4 py-2 border border-none rounded-md 
    placeholder-slate-500 focus:border-none focus:outline-none focus:placeholder-slate-400 "
      type="text"
      placeholder="Type to add any task"
      onKeyDown={handleKeyDown}
      onChange={(e) => setText(e.target.value)}
    />
  );
};
