import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Detail() {
    const { id } = useParams();
    const [student, setStudent] = useState([]);
    useEffect(() => {
        async function fecthData() {
            await axios.get(`http://localhost:8080/student/${id}`)
                .then(res => setStudent(res.data))
                .catch(err => console.log(err))
        }
        fecthData();
    }, [])
    return (
        <div>
            <div className="row">
                <table class="table bordered" style={{ marginLeft: "20px", marginTop: "50px" }}>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Department</th>
                            <th scope="col">Registered Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{id}</th>
                            <td>{student.firstname} {student.lastname}</td>
                            <td>{student.email}</td>
                            <td>{student.department}</td>
                            <td>{student.subject}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row justify-content-center">
                <a href="/register-list"><p>Back to List</p></a>
            </div>
        </div>

    )
}
