import React from 'react';

export default function TodoList({ todo, inputHandler, submitHandler }) {
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
    </div>
  );
}
