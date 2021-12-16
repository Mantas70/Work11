import {Form, Button, Col, Card, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {Link, useNavigate} from "react-router-dom";
import {auth, signInWithEmailPassword} from "../services/AuthServices";
const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth)
    useEffect(()=>{
        if(loading) return;
        if(user) Navigate('/works')
    },[user,loading])
    const submitHandler = (e) =>{
         e.preventDefault()
        signInWithEmailPassword(email,password)
    }
  return(
      <>
          <h2 className="mt-3">Prisijungti</h2>
          <Form onSubmit={submitHandler}>
          <Row className="col-4">
          <Form.Group>
              <Form.Control
                type="email"
                placeholder="Iveskite El. Pasta"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
          </Form.Group>
          </Row>
              <Row className="col-4">
              <Form.Group>
                  <Form.Control
                      type="password"
                      placeholder="Iveskite Slaptazodi"
                      onChange={(e)=>setPassword(e.target.value)}
                      value={password}
                  />
                  <Button type="submit" className="btn btn-success">
                      Prisijungti
                  </Button>
                  <div>
                      <ul>
                          <li>Neturi Paskyros? <Link to="/register">Register</Link></li>
                          <li>Pamirsai slaptazodi?<Link to="/reset">Reset</Link></li>
                      </ul>
                  </div>
              </Form.Group>
              </Row>
          </Form>

      </>
  )
}
export default Login