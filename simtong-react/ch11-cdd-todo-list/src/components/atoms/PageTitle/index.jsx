import styled from '@emotion/styled';
import React from 'react';

const Container = styled.h1`
  margin-top: 0;
`;

export const PageTitle = ({ title }) => {
  return <Container>{title}</Container>;
};
