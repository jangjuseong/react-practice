import React from 'react';

export default function TodoList({ inputValue, inputHandler, submitHandler }) {
  return (
    <div>
      <input
        onChange={inputHandler}
        type='text'
        value={inputValue}
        className='border'
      />
      <button onClick={submitHandler} className='border ml-2'>
        확인
      </button>
    </div>
  );
}
