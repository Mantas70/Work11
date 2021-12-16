import Header from "./components/Header";
import Works from "./components/Works";
import AddWork from "./components/AddWork";
import {useEffect, useState} from "react";
import {Alert} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Work from "./components/Work";
import Register from "./components/Register";
import Login from "./components/Login";
import Reset from "./components/Reset";
const App  = ()=>{
    const [message, setMessage] = useState('')
    const setMessageHandler = (status) =>{
        if(status){
            setMessage('Darbas pridetas sekmingai')
        }
    }
    useEffect( ()=>{
        setTimeout(() =>{
            setMessage('')
        }, 5000)
    }, [message])
    return(
      <div className="container">
          <Router>
        <Header/>
          {(!!message.length) && <Alert variant="success">{message}</Alert>}
              <Routes>
                  <Route exact path="/" element={<Login />}/>
                  <Route exact path="/register" element={<Register />}/>
                  <Route exact path="/reset" element={<Reset />}/>
                  <Route exact path="/works" element={<Works status={setMessageHandler}/>}/>
                  <Route path ="/work/update/:id" element={<AddWork />}/>
                  <Route path="/work/delete/:id" element={<Work />}/>
              </Routes>
          </Router>
      </div>
  )

}
export default App;
