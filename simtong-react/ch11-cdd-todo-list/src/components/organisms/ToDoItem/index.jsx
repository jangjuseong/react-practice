import styled from '@emotion/styled';
import React from 'react';
import { Button } from '/src/components/atoms/Button';
import { Label } from '/src/components/atoms/Label';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const ToDoItem = ({ label, onDelete }) => {
  return (
    <Container>
      <Label label={label} />
      <Button label='삭제' onClick={onDelete} />
    </Container>
  );
};
