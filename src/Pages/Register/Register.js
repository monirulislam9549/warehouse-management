import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateToLogin = event => {
        navigate('/login')
    }

    if (user) {
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='register-form'>
            <h1 style={{ textAlign: 'center' }}>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Your Name' />
                <input type="email" name='email' id='' placeholder='Email Address' required />
                <input type="password" name='password' id='' placeholder='password' required />
                <input className='w-50 mx-auto btn btn-primary' type="submit" value="Register" />
                <p>Already registered? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateToLogin}>Please Login</Link> </p>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Register;