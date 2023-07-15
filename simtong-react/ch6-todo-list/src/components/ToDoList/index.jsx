import styled from '@emotion/styled';
import { ToDoItem } from '../ToDoItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ToDoList = ({ toDoList, onDelete }) => {
  return (
    <Container>
      {toDoList.map(todo => (
        <ToDoItem
          key={todo}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === 'function') onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};
