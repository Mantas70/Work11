import {Form, Button, Col, Card} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {Link, useNavigate} from "react-router-dom";
import {auth, sendPasswordReset} from "../services/AuthServices";
const Reset = () =>{
    const Navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [user,loading, error] = useAuthState(auth)

    useEffect(()=>{
        if(loading) return;
    },[user,loading])
    const submitHandler = (e) =>{
        e.preventDefault()
        sendPasswordReset(email)
    }
    return(
        <>
            <h2 className="mt-3">Prisijungti</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Control
                        type="email"
                        placeholder="Iveskite El. Pasta"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Button type="submit" className="btn btn-success">Siusti</Button>
                    <div>
                        <ul>
                            <li>Neturi Paskyros? <Link to="/register">Register</Link></li>
                        </ul>
                    </div>
                </Form.Group>
            </Form>

        </>
    )
}
export default Reset