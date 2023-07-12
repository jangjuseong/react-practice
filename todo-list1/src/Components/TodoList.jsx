import React, { useState } from 'react';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);

  const inputHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = () => {
    setList((prevList) => [...prevList, { value: todo, isEditing: false }]);
    setTodo('');
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
          <TodoItem item={item} index={index} list={list} setList={setList} />
        ))}
      </div>
    </div>
  );
}
