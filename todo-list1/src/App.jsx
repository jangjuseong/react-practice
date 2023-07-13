import TodoItem from './Components/TodoItem';
import TodoList from './Components/TodoList';
import UseHookListManagementHooks from './Components/UseHookListManagementHooks';

function App() {
  const {
    inputValue,
    list,
    inputHandler,
    submitHandler,
    deleteHandler,
    updateHandler,
    editHandler,
    finishedHandler,
  } = UseHookListManagementHooks();

  return (
    <>
      <TodoList
        inputValue={inputValue}
        inputHandler={inputHandler}
        list={list}
        submitHandler={submitHandler}
      />
      <TodoItem
        list={list}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
        editHandler={editHandler}
        finishedHandler={finishedHandler}
      />
    </>
  );
}

export default App;
