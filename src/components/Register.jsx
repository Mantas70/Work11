import {Form, Button, Col, Card, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {Link,useNavigate} from "react-router-dom";
import {auth, registerWithEmailPassword} from "../services/AuthServices";
const Register = () => {
    const[email, setEmail] = useState("")
    const[name, setName] = useState("")
    const[password, setPassword] = useState("")
    const[user,loading,error] = useAuthState(auth)
    const Navigate = useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault()
        if(!name) alert('Ivesk Varda')
        registerWithEmailPassword(name,email,password)
    }
    useEffect(()=>{
        if(loading) return;
        if(user) Navigate("/works");

    },[user, loading])
    return(
        <>
            <h2 className="mt-3 text-center"> Sukurti vartotoja</h2>
            <Card className="m-4">
            <Form onSubmit={submitHandler}>
                <Col>
                <Form.Group className="col-4 m-3">
                    <Form.Control
                    type="text"
                    placeholder="Iveskite Varda"
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    />

                </Form.Group>
                <Form.Group className="col-4 m-3">
                    <Form.Control
                        type="email"
                        placeholder="Iveskite El. pasta"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                    />
                </Form.Group>
                <Form.Group className="col-4 m-3">
                    <Form.Control
                        type="password"
                        placeholder="Iveskite Slaptazodi"
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                    />
                </Form.Group>
                <Button type="submit" className="btn btn-success col-10 m-3">
                    Registruotis
                </Button>
                </Col>
            </Form>
            </Card>
        </>
    )
}
export default Register;