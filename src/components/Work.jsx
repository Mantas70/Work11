import {Link} from "react-router-dom"
const Work = (props)=>{
    const diff = (start, end)=> {
        start = start.split(":");
        end = end.split(":");
        const startDate = new Date(0, 0, 0, start[0], start[1], 0);
        const endDate = new Date(0, 0, 0, end[0], end[1], 0);
        let diff = endDate.getTime() - startDate.getTime();
        let hours = Math.floor(diff / 1000 / 60 / 60);
        diff -= hours * 1000 * 60 * 60;
        const minutes = Math.floor(diff / 1000 / 60);
        return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
    }
    const getID = () =>{
        props.onDelete(props.id)
    }
    return(
        <tr>
            <td>{props.date}</td>
            <td>{props.company}</td>
            <td>{props.service}</td>
            <td>{props.description}</td>
            <td>{props.timeFrom && diff(props.timeFrom, props.timeTo)}</td>
            <td><Link key={props.id} to={`work/update/${props.id}`}>Redaguoti</Link></td>
            <td><Link to={`work/delete/`} onClick={getID}>Salinti</Link></td>
        </tr>
    )
}

export default Work