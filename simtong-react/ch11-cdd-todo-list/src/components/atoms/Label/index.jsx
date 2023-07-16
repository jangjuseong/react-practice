import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  flex: 1;
  font-size: 1.2rem;
  margin-top: 16px;
`;

export const Label = ({ label }) => {
  return <Container>{label}</Container>;
};
