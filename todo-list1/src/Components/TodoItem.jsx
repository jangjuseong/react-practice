import React from 'react';

const TodoItem = ({ item, index, list, setList }) => {
  const deleteHandler = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const updateHandler = (index, newValue) => {
    const newList = [...list];
    newList[index] = { ...newList[index], value: newValue };
    setList(newList);
  };

  const editHandler = (index) => {
    const newList = [...list];
    newList[index] = { ...newList[index], isEditing: true };
    setList(newList);
  };

  const finishedHandler = (index) => {
    const newList = [...list];
    newList[index] = { ...newList[index], isEditing: false };
    setList(newList);
  };
  return (
    <div>
      {item.isEditing ? (
        <>
          <input
            type='text'
            className='border'
            value={item.value}
            onChange={(e) => updateHandler(index, e.target.value)}
          />
          <button
            onClick={() => finishedHandler(index)}
            className='ml-2 border'
          >
            수정 완료
          </button>
        </>
      ) : (
        <>
          <span>{item.value}</span>
          <button onClick={() => editHandler(index)} className='ml-2 border'>
            수정
          </button>
        </>
      )}
      <button onClick={() => deleteHandler(index)} className='ml-2 border'>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
