import Work from "./Work";
import {Table} from "react-bootstrap";
import * as service from "../services/worksServices"
const WorkTable = (props) => {
    const getIdHandler = (id) =>{
        service.deleteWork(id)
    }
    return(
        <>
    <Table striped bordered hover>
        <thead>
        <tr>
            <th>Data</th>
            <th>Klientas</th>
            <th>Suteikta paslauga</th>
            <th>Aprašymas</th>
            <th>Trukmė</th>
            <th>Salinimas</th>
            <th>Redagavimas</th>
        </tr>
        </thead>
        <tbody>
        {!!props.works.length && props.works.map((e, i) => <Work
            key={i}
            date={e.date}
            id={e.id}
            company={e.company}
            service={e.service}
            description={e.description}
            timeFrom={e.timeFrom}
            timeTo={e.timeTo}
            onDelete={getIdHandler}
        />)}
        </tbody>
    </Table>
        </>
    )
}
export default WorkTable;