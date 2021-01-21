import React from 'react'
import { auth,provider } from './firebase';
import './Login.css';
import {Button}  from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {

    const dispatch = useDispatch();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }))
        })
        .catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt=""/>

                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login;
