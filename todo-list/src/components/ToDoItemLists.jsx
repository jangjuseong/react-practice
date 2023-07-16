import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';

const Container = styled.div`
  display: flex;
`;

export const ToDoItemLists = ({
  list,
  onDelete,
  setToDo,
  toDoList,
  setToDoList,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newToDo, setNewToDo] = useState('');

  const onUpdate = idx => {
    setNewToDo(list[idx]);
    setIsEditing(true);
  };

  const onUpdateComplete = idx => {
    // setToDoList([...toDoList, (toDoList[idx] = newToDo)]);
    setToDoList(prevList => {
      const updatedList = [...prevList];
      updatedList[idx] = newToDo;
      return updatedList;
    });
    setIsEditing(false);
  };

  return (
    <>
      {list.map((item, index) => (
        <Container key={index}>
          {isEditing ? (
            <div>
              <Input
                toDo={newToDo}
                onChange={event => setNewToDo(event.target.value)}
              />
              <Button label='수정 완료' onClick={onUpdateComplete} />
            </div>
          ) : (
            <div>
              <span>{item}</span>
              <Button label='수정' onClick={() => onUpdate(index)} />
            </div>
          )}
          <Button label='삭제' onClick={() => onDelete(index)} />
        </Container>
      ))}
    </>
  );
};
