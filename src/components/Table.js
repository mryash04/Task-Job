import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from 'react-avatar';

function Table(props) {
    return (
        <div className="table-data">
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">email</th>
                        <th scope="col">first_name</th>
                        <th scope="col">last_name</th>
                        <th scope="col">avatar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{props.id}</th>
                        <td className="font-weight-bold">{props.email}</td>
                        <td>{props.firstName}</td>
                        <td>{props.lastName}</td>
                        <td><img src={props.image} alt="avatar_image" 
                        style={{height:"70px", width:"70px", borderRadius:"10px"}} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;
