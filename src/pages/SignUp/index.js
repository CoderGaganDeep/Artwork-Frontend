import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [isArtist, setisArtist] = useState("false");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);
  //https://stackoverflow.com/questions/39224165/set-checkbox-value-in-react-js
  const handleChange = (event) => {
    setisArtist(event.target.checked);
  };

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password, isArtist));

    setEmail("");
    setPassword("");
    setName("");
    setisArtist("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Signup</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {/* https://upmostly.com/tutorials/how-to-checkbox-onchange-react-js */}
        {/* https://www.google.com/search?q=how+manage+states+checkbox+in+react+form&sxsrf=ALiCzsY0nlmi3BVd6j5II7mV_vrqP1BBPw%3A1656500690020&ei=0jG8YtZJ6Jb27w-MhI2ACg&ved=0ahUKEwjW-sr5wdL4AhVoi_0HHQxCA6AQ4dUDCA4&uact=5&oq=how+manage+states+checkbox+in+react+form&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABOgcIABBHELADOggIIRAeEBYQHToHCCEQChCgAUoECEEYAEoECEYYAFCCA1iMEWDDFmgBcAF4AIABpAeIAdcKkgEHMS4zLjYtMZgBAKABAcgBCMABAQ&sclient=gws-wiz */}
        <Form.Group controlId="formBasicisArtist">
          <input type="checkbox" value={isArtist} onChange={handleChange} />
          <Form.Label>. I am an artist</Form.Label>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group>
        <Link to="/login">Click here to log in</Link>
      </Form>
    </Container>
  );
}
