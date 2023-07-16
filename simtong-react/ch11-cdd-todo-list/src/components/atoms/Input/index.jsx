import styled from '@emotion/styled';
import React from 'react';

const TextInput = styled.input`
  font-size: 1.2rem;
  padding: 8px;
`;

export const Input = ({ value, onChange }) => {
  return (
    <TextInput value={value} onChange={event => onChange(event.target.value)} />
  );
};
