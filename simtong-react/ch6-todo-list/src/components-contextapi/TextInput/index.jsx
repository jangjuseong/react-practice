import styled from '@emotion/styled';

const Input = styled.input`
  font-size: 1.2rem;
  padding: 8px;
`;

export const TextInput = ({ value, onChange }) => {
  return (
    <Input value={value} onChange={event => onChange(event.target.value)} />
  );
};
