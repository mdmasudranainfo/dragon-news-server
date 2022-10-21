import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/ContextProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const Navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
        Navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        setError(error.message);
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
      <Form.Text className="text-danger d-block">{error}</Form.Text>
    </Form>
  );
};

export default Login;
