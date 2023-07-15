import styled from '@emotion/styled';
import { Title } from '../Title';
import { ToDoList } from '../ToDoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
`;

export const DataView = ({ label, toDoList, onDelete }) => {
  return (
    <Container>
      <Title label={label} />
      <ToDoList toDoList={toDoList} onDelete={onDelete} />
    </Container>
  );
};
