import React, {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {FloatingLabel} from "react-bootstrap";
import { BsFillArchiveFill } from "react-icons/bs";
import Companies from "./companies/Companies";
import Services from "./services/Services";
import {useParams} from "react-router-dom";
import * as service from "../services/worksServices"
const AddWork = (props)=>{
    const {id} = useParams()
    const [items, setItems] = useState({
       date: "",
       company: "",
       service: "",
       description:"",
       timeFrom:"",
       timeTo:""
    })
    useEffect(()=>{
        id && service.getWorkById(item=>setItems(item), id)
    },[id])
    const handleChange = (e) =>{
        setItems(
            {
                ...items,
                [e.target.name]:e.target.value
            }
        )
    }

    const submitWorkHandler = (e) =>{
        e.preventDefault()
        props.onSave(items)
    }
    return(
       <>
           <Card>
               <Card.Header>Pridėkite atliktą darbą<BsFillArchiveFill/></Card.Header>
               <Card.Body>
                   <Form onSubmit={submitWorkHandler}>
                       <Form.Group className="mb-3" >
                           <Form.Label>Pasirinkite datą:</Form.Label>
                           <Form.Control type="date" name="date" value={items.date} onChange={handleChange}/>
                       </Form.Group>
                       <Form.Group className="mb-3" >
                           <FloatingLabel  controlId="floatingSelect" label="Pasirinkite įmonę">
                               <Form.Select aria-label="Floating label select example" name="company"
                                            value={items.company} onChange={handleChange} >
                                   <option disabled>--Pasirinkite imone--</option>
                                   <Companies/>
                               </Form.Select>
                           </FloatingLabel>
                       </Form.Group>
                       <Form.Group className="mb-3" >
                           <FloatingLabel controlId="floatingSelect" label="Pasirinkite suteiktą paslaugą">
                               <Form.Select aria-label="Floating label select example" name="service"
                                            value={items.service} onChange={handleChange}>
                                   <option>--Pasirinkite paslauga--</option>
                                   <Services/>
                               </Form.Select>
                           </FloatingLabel>
                       </Form.Group>
                       <Form.Group className="mb-3" >
                           <FloatingLabel controlId="floatingTextarea2" label="Atlikto darbo aprašyma">
                               <Form.Control
                                   as="textarea"
                                   placeholder="Atlikto darbo aprašymas"
                                   style={{height: '100px'}}
                                   name="description"
                                   value={items.description}
                                   onChange={handleChange}
                               />
                           </FloatingLabel>
                       </Form.Group>
                       <Form.Group className="mb-3" >
                           <Form.Label>Nuo:</Form.Label>
                           <Form.Control type="time" placeholder="N" name="timeFrom" value={items.timeFrom}
                                         onChange={handleChange}/>
                       </Form.Group>
                       <Form.Group className="mb-3">
                           <Form.Label>Iki:</Form.Label>
                           <Form.Control type="time" name="timeTo" value={items.timeTo} onChange={handleChange}/>
                       </Form.Group>
                       {(id)?
                           <Button variant="primary" type="button">Atnaujinti</Button>:
                           <Button variant="primary" type="submit">Saugoti</Button>
                       }
                   </Form>
               </Card.Body>
           </Card>
           </>
    )
}

export default AddWork