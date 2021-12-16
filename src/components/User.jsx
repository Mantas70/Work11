import React, {useEffect, useState} from "react";
import {auth,Logout} from "../services/AuthServices";
import {Navbar, NavDropdown} from "react-bootstrap";
import {useAuthState} from "react-firebase-hooks/auth";
import * as userService from "../services/UserServices"
import {useNavigate} from "react-router-dom";
const User = () =>{
    const Navigate = useNavigate();
    const [userData,setUserData] = useState({})
    const [user,loading,error] = useAuthState(auth)
    useEffect(()=>{
        if(loading) return;
        if(!user) return Navigate("/")
        userService.getUserData(user, setUserData)
    },[user, loading, userData])
    return(

    <Navbar.Collapse className="justify-content-end">
        {user &&
        <NavDropdown title={userData.name}>
            <NavDropdown.Item className="text-dark" onClick={Logout}>Atsijungti</NavDropdown.Item>
        </NavDropdown>
        }
    </Navbar.Collapse>
    )
}
export default User