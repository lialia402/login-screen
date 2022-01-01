import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { auth } from "../firebase"
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")

  const [user, setUser] = useState({});
  const history = useNavigate()

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  async function handleSubmit(e) {
    e.preventDefault()

    try {
        const user = await signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );
        history("/")
        console.log(user);
      } catch (error) {
        console.log(error.message);
        setError(error.message)
      }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button className="w-100 mt-3" type="submit">
              Sign Up
            </Button>
            
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to={"/signup"}> Sign up </Link>
      </div>
    </>
  )
}