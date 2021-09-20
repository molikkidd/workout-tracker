import React from 'react'
import { Table } from 'react-bootstrap';

const UpperBody = (props) => {
    return (
        <div>
        <div>
        <h2>Coming From the Upper Body Tracker</h2>
        </div>

        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Exercise</th>
                <th>Reps</th>
                <th>Sets</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{props.idx}</td>
                <td>{props.body}</td>
                <td>{props.reps}</td>
                <td>@mdo</td>
                </tr>
            </tbody>
        </Table>
        </div>
    )

}

export default UpperBody;