import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [isUpdateMode, setIsUpdateMode] = useState(-1);
  const [newToDo, setNewToDo] = useState('');

  const handleSubmit = () => {
    if (inputValue === '') return;
    setToDoList([...toDoList, inputValue]);
    setInputValue('');
  };

  const handleDelete = idx => {
    setToDoList(toDoList.filter((_, index) => index !== idx));
  };

  const handleUpdateMode = idx => {
    setIsUpdateMode(idx);
    setNewToDo(toDoList[idx]);
  };

  const handleUpdateComplete = idx => {
    setToDoList(prevList => {
      const updatedList = [...prevList];
      updatedList[idx] = newToDo;
      return updatedList;
    });
    setIsUpdateMode(-1);
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <button onClick={handleSubmit}>추가</button>
      {toDoList.map((item, index) => (
        <div key={index}>
          {isUpdateMode === index ? (
            <>
              <input
                value={newToDo}
                onChange={event => setNewToDo(event.target.value)}
              />
              <button onClick={() => handleUpdateComplete(index)}>
                수정 완료
              </button>
            </>
          ) : (
            <>
              <span>{item}</span>
              <button onClick={() => handleUpdateMode(index)}>수정</button>
            </>
          )}
          <button onClick={() => handleDelete(index)}>삭제</button>
        </div>
      ))}
    </div>
  );
}

export default App;
