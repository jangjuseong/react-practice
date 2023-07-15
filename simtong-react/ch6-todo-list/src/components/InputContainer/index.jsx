import React, { useState } from 'react';
import { ShowInputButton } from '../ShowInputButton';
import { ToDoInput } from '../ToDoInput';

export const InputContainer = ({ onAdd }) => {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onAddToDo = toDo => {
    onAdd(toDo);
    setShowToDoInput(false);
  };
  return (
    <>
      {showToDoInput && <ToDoInput onAdd={onAddToDo} />}
      <ShowInputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </>
  );
};
