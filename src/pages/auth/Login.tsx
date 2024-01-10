import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import useLogin from './hooks/useLogin';
import AuthContainer from './AuthContainer';

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
    <AuthContainer>
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
    </AuthContainer>
  );
};

export default LoginPage;
