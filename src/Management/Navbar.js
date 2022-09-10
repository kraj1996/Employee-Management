import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <h1 className='text-center bg-primary m-auto py-3 text-white text'>Employee Management System</h1>
                <nav className='bg-secondary p-4'>
                    <div className='container'>
                        <div>
                            <ul className='d-flex nav'>
                                <li className='mx-5'><Link to="/" className="text-white text-large" >Add Employee</Link></li>
                                <li className='mx-5'><Link to="/data" className="text-white text-xl-center">Employee Details</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;