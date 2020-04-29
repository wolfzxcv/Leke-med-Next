import React from 'react';
import styled from 'styled-components';
import Layout from '../components/common/Layout';

const Index = () => (
  <Layout>
    <Title>Home page</Title>
  </Layout>
);

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default Index;
