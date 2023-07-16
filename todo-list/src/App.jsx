import styled from '@emotion/styled';
import { useState } from 'react';

const Input = styled.div`
  display: flex;
`;

const ToDoList = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [inputValue, setInputValue] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [updateInputValue, setUpdateInputValue] = useState('');
  const [updateMode, setUpdateMode] = useState(-1);

  const handleSubmit = () => {
    setToDoList([...toDoList, inputValue]);
    setInputValue('');
  };

  const handleDelete = idx => {
    setToDoList(toDoList.filter((_, index) => idx !== index));
  };

  const handleUpdateMode = idx => {
    setUpdateMode(idx);
    setUpdateInputValue(toDoList[idx]);
  };

  const handleUpdateComplete = idx => {
    setToDoList(prevList => {
      const updatedList = [...prevList];
      updatedList[idx] = updateInputValue;
      return updatedList;
    });
    setUpdateMode(-1);
  };

  return (
    <div>
      <Input>
        <input
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        <button onClick={handleSubmit}>추가</button>
      </Input>
      <ToDoList>
        {toDoList.map((item, index) => (
          <div key={index}>
            {updateMode === index ? (
              <>
                <input
                  value={updateInputValue}
                  onChange={event => setUpdateInputValue(event.target.value)}
                />
                <button onClick={() => handleUpdateComplete(index)}>
                  수정완료
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
      </ToDoList>
    </div>
  );
}

export default App;
