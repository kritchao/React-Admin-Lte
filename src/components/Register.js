import React, { useState } from 'react'
import axios from 'axios'

export default function Register() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [department, setDepartment] = useState("")
    const [subject, setSubject] = useState("")
    const onFinish = values => {
        const body = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            department: department,
            subject: subject
        }
        axios.post('http://localhost:8080/register', body)
            .then(res => alert(res.data.message)).catch(e => alert(e.response.data.message))
    }

    return (
        <div className="row justify-content-center" style={{ marginTop: "25px" }}>

            <form className="needs-validation" onSubmit={onFinish} novalidate >
                <div className="form-row" style={{marginBottom:"15px"}}>
                    <h2>Register Subject</h2>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstname">First name</label>
                        <input className="form-control" type="text" id="firstname" onChange={(e) => setFirstName(e.target.value)} value={firstName} name="firstname" required /><br /><br />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastname">Last name</label>
                        <input className="form-control" type="text" id="lname" onChange={(e) => setLastName(e.target.value)} value={lastName} name="lastname" required /><br /><br />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type='email' id="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" required /><br /><br />
                </div>

                <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <input className="form-control" type="text" id="department" onChange={(e) => setDepartment(e.target.value)} value={department} name="department" required /><br /><br />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select value={subject} onChange={(e) => setSubject(e.target.value)} className="form-control" id="subject" required>
                        <option value="">Please Select Subject</option>
                        <option value="Math I">Math I</option>
                        <option value="Math II">Math II</option>
                        <option value="Math III">Math III</option>
                        <option value="Computer Programming">Computer Programming</option>
                        <option value="Static">Static</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Register</button>

            </form>
        </div>
    )
}
