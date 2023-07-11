import React, { useState } from 'react';

export default function Input() {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);

  const inputHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = () => {
    setList([...list, todo]);
    setTodo('');
  };

  const deleteHandler = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
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
            <span>{item}</span>
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
