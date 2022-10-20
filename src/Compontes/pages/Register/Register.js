import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import FormRange from "react-bootstrap/esm/FormRange";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../Context/ContextProvider";
const Register = () => {
  const { regiser } = useContext(AuthContext);
  const handlerRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.name.value;
    const email = form.email.value;
    const Password = form.password.value;
    //
    regiser(email, Password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        form.reset();
        // ...
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
    console.log(name, photoUrl, email, Password);
  };
  return (
    <Form onSubmit={handlerRegister}>
      <h4>Register</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name Photo Url</Form.Label>
        <Form.Control name=" photoUrl" type="text" placeholder="Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Email</Form.Label>
        <Form.Control name="email" type="email" placeholder="email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
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

export default Register;
