import {Button, Form} from "react-bootstrap";
import Companies from "./companies/Companies";
import Services from "./services/Services";
import {useEffect, useState} from "react";
const Filter = (props) =>{
    const [search, setSearch] = useState({})
    const handleChange = (e) => {
        setSearch(
            {
                ...search,
                [e.target.name]: e.target.value
            }
        )
    }
    const resetFilter = () =>{
        setSearch({})
    }
    useEffect(()=>{
        props.criteria(search)
    },[search])
    return(
        <div className="input-group">
            <div><label>Duomenu strukturavimas: </label></div>
            <Form.Select name="company" defaultValue="--Pasirinkite imone--" onChange={handleChange}>
                <option disabled>--Pasirinkite imone--</option>
                <Companies />
            </Form.Select>
            <Form.Select name="service" defaultValue="--Pasirinkite paslauga--" onChange={handleChange}>
                <option disabled>--Pasirinkite paslauga--</option>
                <Services />
            </Form.Select>
            <div>
                {!!Object.keys(search).length && <Button variant="primary" type="reset" onClick={resetFilter}>Valyti</Button>}
            </div>
        </div>
    )
}
export default Filter;