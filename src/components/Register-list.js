import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function RegisterList() {
    const [allData, setAllData] = useState([]);
    const [index, setIndex] = useState("")

    async function fetchData() {
        const students = await axios.get('https://test-backend-cybertory.herokuapp.com/students');
        setAllData(students.data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const deleteItem = async (id) => {
        await axios.delete(`https://test-backend-cybertory.herokuapp.com/student/${id}`);
        fetchData();
    }
    return (
        <div style={{ margin: "50px" }}>
            <div className="modal fade" id="Modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete this ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>deleteItem(index)}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

            <table class="table" >
                <thead class="thead-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Register Subject</th>
                        <th scope="col">Option</th>
                    </tr>
                </thead>
                <tbody>
                    {allData.map(item => (
                        <tr>
                            <th scope="row" style={{ marginLeft: "20px" }}>{item.id}</th>
                            <td>{item.firstname} {item.lastname}</td>
                            <td>{item.subject}</td>
                            <td>
                                <Link to={`/student/${item.id}`} >
                                    <button type="button" className="btn btn-outline-secondary" style={{ marginRight: "10px" }}>
                                        Detail
                                    </button>
                                </Link>
                                <button className="btn btn-danger" data-toggle="modal" data-target="#Modal" onClick={()=>setIndex(item.id)}>
                                    Delete
                                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
