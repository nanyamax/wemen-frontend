import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface IProps {
  children: React.ReactNode;
}

const AuthContainer = ({ children }: IProps) => {
  return (
    <Container className="auth-container">
      <Row>
        <Col lg={{ offset: 3, span: 6 }} className="auth-container-col">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default AuthContainer;
