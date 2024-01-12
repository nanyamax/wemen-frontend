import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import useSignup from './hooks/useSignup';
import AuthContainer from './AuthContainer';

const SignupPage = () => {
  const { signup, isLoading } = useSignup();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const formData = new FormData(e.currentTarget),
      formDataObj = Object.fromEntries(formData.entries());
    const dataToPost = {
      email: formDataObj.email as string,
      firstName: formDataObj.firstName as string,
      lastName: formDataObj.lastName as string,
      password: formDataObj.password as string,
      password2: formDataObj.password2 as string,
      rememberMe: !!formDataObj.rememberM,
      maritalStatus: formDataObj.maritalStatus as string,
      country: formDataObj.country as string,
    };
    signup(dataToPost);
  };

  return (
    <AuthContainer>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label column sm={2}>
            First name
          </Form.Label>
          <Col>
            <Form.Control
              type="text"
              placeholder="First name"
              size={'lg'}
              name="firstName"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label column sm={2}>
            Last name
          </Form.Label>
          <Col>
            <Form.Control
              type="text"
              placeholder="Last name"
              size={'lg'}
              name="lastName"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
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

        <Form.Group className="mb-3" controlId="passwords">
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
        <Form.Group className="mb-3" controlId="password2">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col>
            <Form.Control
              type="password"
              placeholder="Enter Password again"
              size={'lg'}
              name="password2"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMaritalStatus">
          <Form.Label column sm={2}>
            Marital status
          </Form.Label>
          <Form.Select
            aria-label="Marital status"
            size="lg"
            name="maritalStatus">
            <option value="single">Single</option>
            <option value="dating">Dating</option>
            <option value="Married">Married</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCountry">
          <Form.Label column sm={2}>
            Country
          </Form.Label>
          <Form.Select aria-label="Country" size="lg" name="country">
            <option value="Kenya">Kenya</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Uganda">Uganda</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <div style={{ textAlign: 'end' }}>
            <Button type="submit" disabled={!!isLoading}>
              {isLoading ? 'Loading' : 'Sign up'}
            </Button>
          </div>
        </Form.Group>
      </Form>
    </AuthContainer>
  );
};

export default SignupPage;
