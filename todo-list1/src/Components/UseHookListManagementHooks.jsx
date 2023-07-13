import { useState } from 'react';

export const UseHookListManagementHooks = () => {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);

  const inputHandler = e => {
    setTodo(e.target.value);
  };

  const submitHandler = () => {
    setList(prevList => [...prevList, { value: todo, isEditing: false }]);
    setTodo('');
  };

  const deleteHandler = index => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const updateHandler = (index, newValue) => {
    const newList = [...list];
    newList[index] = { ...newList[index], value: newValue };
    setList(newList);
  };

  const editHandler = index => {
    const newList = [...list];
    newList[index] = { ...newList[index], isEditing: true };
    setList(newList);
  };

  const finishedHandler = index => {
    const newList = [...list];
    newList[index] = { ...newList[index], isEditing: false };
    setList(newList);
  };

  return {
    todo,
    list,
    inputHandler,
    submitHandler,
    deleteHandler,
    updateHandler,
    editHandler,
    finishedHandler,
  };
};
