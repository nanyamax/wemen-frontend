import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import useLogin from './hooks/useLogin';

const LoginPage = () => {
  const { login, isLoading } = useLogin();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const formData = new FormData(e.currentTarget),
      formDataObj = Object.fromEntries(formData.entries());
    const dataToPost = {
      email: formDataObj.email as string,
      password: formDataObj.password as string,
      rememberMe: !!formDataObj.rememberMe,
    };
    login(dataToPost);
  };

  return (
    <Container>
      <Row md={2}>
        <Col
          md={{ offset: 3 }}
          style={{
            border: '1px solid #ddd',
            padding: '1.5rem',
            borderRadius: '5px',
            marginTop: '2rem',
          }}>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  size={'lg'}
                  name="email"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  size={'lg'}
                  name="password"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHorizontalCheck">
              <Col>
                <Form.Check label="Remember me" name="rememberMe" />
              </Col>
            </Form.Group>

            <Form.Group>
              <div style={{ textAlign: 'end' }}>
                <Button type="submit" disabled={!!isLoading}>
                  {isLoading ? 'Loading' : 'Sign in'}
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
