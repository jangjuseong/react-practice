import TodoItem from './Components/TodoItem';
import TodoList from './Components/TodoList';
import UseListManagementHooks from './Components/UseListManagementHooks';

function App() {
  const {
    inputValue,
    itemList,
    handleInputChange,
    handleSubmit,
    handleDelete,
    handleUpdate,
    handleEdit,
    handleFinish,
  } = UseListManagementHooks();

  return (
    <>
      <TodoList
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <TodoItem
        itemList={itemList}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        handleEdit={handleEdit}
        handleFinish={handleFinish}
      />
    </>
  );
}

export default App;
