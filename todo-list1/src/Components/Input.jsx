import React, { useState } from 'react';

export default function Input() {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);

  const inputHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = () => {
    setList((prevList) => [...prevList, { value: todo, isEditing: false }]);
    setTodo('');
  };

  const deleteHandler = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const updateHandler = (index, value) => {
    const newList = [...list];
    newList[index] = { ...newList[index], value };
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
      <input
        onChange={inputHandler}
        type='text'
        value={todo}
        className='border'
      />
      <button onClick={submitHandler} className='border ml-2'>
        확인
      </button>
      <div className='flex flex-col'>
        {list.map((item, index) => (
          <div key={index}>
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
                <button
                  onClick={() => editHandler(index)}
                  className='ml-2 border'
                >
                  수정
                </button>
              </>
            )}

            <button
              onClick={() => deleteHandler(index)}
              className='ml-2 border'
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
