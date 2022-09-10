import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

function EmployeeData({ data, setData }) {
    const [toggle, settoggle] = useState(true);
    const [edituser, setedituser] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
        date: "",
        salary: "",
        password: ""
    })

    const handleDelete = (id) => {
        alert("User Deleted");
        setData(
            data.filter((e) => {
                return (
                    e.id !== id
                )
            })
        )
    }
    const handleEdit = (e) => {
        alert("Please Edit this User")
        settoggle(false);
        setedituser({
            id: e.id,
            fname: e.name,
            email: e.email,
            phone: e.phone,
            date: e.date,
            salary: e.salary,
            password: e.password
        })
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setedituser(prev => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        setData(data.map((e) => {
            if (e.id === edituser.id) {
                return e = edituser
            }
            return e
        }))

        settoggle(true)
    }
    return (
        <div>
            {toggle ?
                <Table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact No.</th>
                            <th>Date</th>
                            <th>Salary</th>
                            <th colSpan={3}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e, i) => {
                            return (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.phone}</td>
                                    <td>{e.date}</td>
                                    <td>{e.salary}</td>
                                    <td>
                                        <button className='btn btn-danger mx-2' onClick={() => { handleDelete(e.id) }}>Delete</button>
                                        <button className='btn btn-primary mx-2' onClick={() => { handleEdit(e) }}>Edit</button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>
                :
                <div>
                    <form>
                        <div className='mt-3'>
                            <label htmlFor='name'>Name</label>
                            <input type="text" className='form-control' value={edituser.name} onChange={handleChange} id='name' name='name'></input>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor='email'>Email</label>
                            <input type="text" className='form-control' id='email' value={edituser.email} onChange={handleChange} name='email'></input>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor='phone'>Phone</label>
                            <input type="text" className='form-control' id="phone" value={edituser.phone} onChange={handleChange} name="phone"></input>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor='date'>Date</label>
                            <input type="text" className='form-control' id="date" value={edituser.date} onChange={handleChange} name="date"></input>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor='salary'>Salary</label>
                            <input type="text" className='form-control' id="salary" value={edituser.salary} onChange={handleChange} name="salary"></input>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor='password'>Password</label>
                            <input type="password" className='form-control' id='password' value={edituser.password} onChange={handleChange} name='password'></input>
                        </div>
                        <div className='mt-3'>
                            <button type='submit' className='btn btn-outline-secondary' onClick={handleUpdate} >Submit</button>
                        </div>

                    </form>
                </div>
            }
        </div>
    )
}
export default EmployeeData;