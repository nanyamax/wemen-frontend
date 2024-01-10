import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from '../layout';
import { Container } from 'react-bootstrap';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Container fluid className="home">
        <Outlet />
      </Container>
    </Layout>
  );
};

export default HomePage;
