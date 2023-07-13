import { useState } from 'react';
import TodoItem from './Components/TodoItem';
import TodoList from './Components/TodoList';

function App() {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);

  const inputHandler = e => {
    setTodo(e.target.value);
  };

  const submitHandler = () => {
    setList(prevList => [...prevList, { value: todo, isEditing: false }]);
    setTodo('');
  };

  return (
    <>
      <TodoList
        todo={todo}
        inputHandler={inputHandler}
        list={list}
        submitHandler={submitHandler}
        setList={setList}
      />
      <TodoItem list={list} setList={setList} />
    </>
  );
}

export default App;
