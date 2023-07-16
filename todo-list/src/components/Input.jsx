import React from 'react';

export const Input = ({ toDo, onChange }) => {
  return <input value={toDo} onChange={onChange} />;
};
