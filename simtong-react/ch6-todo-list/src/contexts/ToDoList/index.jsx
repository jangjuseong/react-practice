import { createContext, useState } from 'react';

const ToDoListContext = createContext({
  toDoList: [],
  onAdd: () => {},
  onDelete: () => {},
});

const ToDoListContextProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([
    '리액트 공부하기',
    '운동하기',
    '책 읽기',
  ]);

  const onDelete = todo => {
    setToDoList(toDoList.filter(item => item !== todo));
  };

  const onAdd = toDo => {
    setToDoList([...toDoList, toDo]);
  };

  return (
    <ToDoListContext.Provider value={{ toDoList, onAdd, onDelete }}>
      {children}
    </ToDoListContext.Provider>
  );
};

export { ToDoListContext, ToDoListContextProvider };
