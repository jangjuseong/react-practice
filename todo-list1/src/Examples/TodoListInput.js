import React from "react";

const TodoListInput = ({ text, onChange, onClick }) => {
  return (
    <div>
      <input value={text || ""} onChange={onChange} />
      <button onClick={onClick}>입력</button>
    </div>
  );
};

export default TodoListInput;
