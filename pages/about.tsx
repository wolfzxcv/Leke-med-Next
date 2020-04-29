import React from 'react';
import styled from 'styled-components';
import Layout from '../components/common/Layout';

const About = () => (
  <Layout>
    <Title>About page</Title>
  </Layout>
);

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`;

export default About;
