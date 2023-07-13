import React from 'react';

export default function TodoList({
  inputValue,
  handleInputChange,
  handleSubmit,
}) {
  return (
    <div>
      <input
        onChange={handleInputChange}
        type='text'
        value={inputValue}
        className='border'
      />
      <button onClick={handleSubmit} className='border ml-2'>
        확인
      </button>
    </div>
  );
}
