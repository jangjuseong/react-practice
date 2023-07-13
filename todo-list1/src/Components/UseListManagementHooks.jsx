import { useState } from 'react';

const UseListManagementHooks = () => {
  const [inputValue, setInputValue] = useState('');
  const [itemList, setItemList] = useState([]);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setItemList(prevList => [
      ...prevList,
      { value: inputValue, isEditing: false },
    ]);
    setInputValue('');
  };

  const handleDelete = index => {
    const newList = [...itemList];
    newList.splice(index, 1);
    setItemList(newList);
  };

  const handleUpdate = (index, newValue) => {
    const newList = [...itemList];
    newList[index] = { ...newList[index], value: newValue };
    setItemList(newList);
  };

  const handleEdit = index => {
    const newList = [...itemList];
    newList[index] = { ...newList[index], isEditing: true };
    setItemList(newList);
  };

  const handleFinish = index => {
    const newList = [...itemList];
    newList[index] = { ...newList[index], isEditing: false };
    setItemList(newList);
  };

  return {
    inputValue,
    itemList,
    handleInputChange,
    handleSubmit,
    handleDelete,
    handleUpdate,
    handleEdit,
    handleFinish,
  };
};

export default UseListManagementHooks;
