import { useState } from 'react';

const UseHookListManagementHooks = () => {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);

  const inputHandler = e => {
    setInputValue(e.target.value);
  };

  const submitHandler = () => {
    setList(prevList => [...prevList, { value: inputValue, isEditing: false }]);
    setInputValue('');
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
    inputValue,
    list,
    inputHandler,
    submitHandler,
    deleteHandler,
    updateHandler,
    editHandler,
    finishedHandler,
  };
};

export default UseHookListManagementHooks;
