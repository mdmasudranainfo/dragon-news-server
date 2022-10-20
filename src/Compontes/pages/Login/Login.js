import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/ContextProvider";

const Login = () => {
  const Navigate = useNavigate();
  const { logIn } = useContext(AuthContext);

  const logInHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        form.reset();
        Navigate("/");
        // ...
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Form onSubmit={logInHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h4>Login</h4>
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Form.Text className="text-muted">
        {/* We'll never share your email with anyone else. */}
      </Form.Text>
    </Form>
  );
};

export default Login;
