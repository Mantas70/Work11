import React, {useEffect, useState} from "react";
import AddWork from "./AddWork";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import WorkTable from "./WorkTable";
import Filter from "./Filter";
import * as service from "../services/worksServices"
const Works  = (props)=>{
    const [addWork,setAddWork] = useState(false)
    const [works,setWorks] = useState([])
    const [filterCrit, setFilterCrit] = useState({})
    const closeFormHandler = ()=>{
        setAddWork(false)
    }
    const saveWorkHandler = (data) =>{
        service.addWork(data)

        props.status(true)
    }
    const filterHandler = (criteria) =>{
        setFilterCrit(criteria)
    }
    const filteredItems = (filterCrit) =>{
        const filterKeys = Object.keys(filterCrit);
        return works.filter(eachObj =>{
            return filterKeys.every(eachKey =>{
                if(!filterCrit[eachKey].length) {
                    return true;
                }
                return filterCrit[eachKey].includes(eachObj[eachKey]);
            })
        })
    }
    useEffect(()=>{
        service.getAllWorks((works)=>setWorks(works))
    },[])
    return(
        <>
            {(addWork) && <AddWork onSave={saveWorkHandler}/>}
        <Card>
            <Card.Header>
                {(addWork)?
                    <Button className="btn btn-danger" onClick={closeFormHandler}>Atšaukti</Button>:
                    <Button className="btn btn-primary" onClick={()=>{setAddWork(true)}}>Pridėti</Button>}
            </Card.Header>
            <Card.Header>
                <Filter criteria={filterHandler}/>
            </Card.Header>
            <Card.Header><h3>Darbų sąrašas:</h3></Card.Header>
            <Card.Body>
                <WorkTable works={filteredItems(filterCrit)}/>
            </Card.Body>

        </Card>
        </>
    )
}

export default Works