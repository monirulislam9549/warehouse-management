import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigateToLogin = event => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault();
    }
    return (
        <div className='register-form'>
            <h1 style={{ textAlign: 'center' }}>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Your Name' />
                <input type="email" name='email' id='' placeholder='Email Address' required />
                <input type="password" name='password' id='' placeholder='password' required />
                <input type="submit" value="Register" />
                <p>Already registered? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateToLogin}>Please Login</Link> </p>

            </form>
        </div>
    );
};

export default Register;