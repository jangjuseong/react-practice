import TodoListContent from "./TodoListContent.js";
import TodoListInput from "./TodoListInput.js";
import UsehookListManagementHooks from "./UsehookListManagementHooks.js";
function App() {
  const {
    text,
    list,
    updateText,
    updateMode,
    onClick,
    onChange,
    onChangeUpdate,
    onClickUpdate,
    onDelete,
    onUpdateMode,
  } = UsehookListManagementHooks();
  return (
    <div>
      <TodoListInput onClick={onClick} onChange={onChange} text={text} />
      <TodoListContent
        list={list}
        updateText={updateText}
        updateMode={updateMode}
        onChangeUpdate={onChangeUpdate}
        onClickUpdate={onClickUpdate}
        onDelete={onDelete}
        onUpdateMode={onUpdateMode}
      />
    </div>
  );
}

export default App;
