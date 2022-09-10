import React, { useState } from 'react';

const InputData = ({ data, setData }) => {

    const [user, setUser] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
        date: "",
        salary: "",
        password: ""

    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUser(prev => {
            return {
                ...prev, id: Date.now(), [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitted Successfully");
        setData([...data, user])
        setUser({
            id: "",
            name: "",
            email: "",
            phone: "",
            date: "",
            salary: "",
            password: ""
        })
    }
    return (
        <>
            <form>
                <div className='mt-3'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" className='form-control' onChange={handleInput} value={user.name} id='name' name='name'></input>
                </div>
                <div className='mt-3'>
                    <label htmlFor='email'>Email</label>
                    <input type="text" className='form-control' onChange={handleInput} value={user.email} id='email' name='email'></input>
                </div>
                <div className='mt-3'>
                    <label htmlFor='phone'>Phone</label>
                    <input type="text" className='form-control' onChange={handleInput} value={user.phone} id="phone" name="phone"></input>
                </div>
                <div className='mt-3'>
                    <label htmlFor='date'>Date</label>
                    <input type="text" className='form-control' onChange={handleInput} value={user.date} id="date" name="date"></input>
                </div>
                <div className='mt-3'>
                    <label htmlFor='salary'>Salary</label>
                    <input type="text" className='form-control' onChange={handleInput} value={user.salary} id="salary" name="salary"></input>
                </div>
                <div className='mt-3'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" className='form-control' onChange={handleInput} value={user.password} id='password' name='password'></input>
                </div>
                <div className='mt-3'>
                    <button type='submit' className='btn btn-secondary' onClick={handleSubmit}>Submit</button>
                </div>

            </form>

        </>
    )
}

export default InputData;