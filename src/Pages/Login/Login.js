import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, GoogleError] = useSignInWithGoogle(auth);
    const hendelLogin = event => {
        event.preventDefault()
    }

    if (googleUser) {
        console.log(googleUser._tokenResponse.email);
        const url = `http://localhost:5000/login`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: googleUser._tokenResponse.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("accessToken",data.token) // send token to localsotorage

                navigate('/')
            });

        
    }

    return (
        <div className='from-container'>
            <form onSubmit={hendelLogin}>
                <div>
                    <h3 className='from-title text-primary text-center'>Please Login</h3>
                    <div className="input-group">
                        <input type="email" name="email" id="" required placeholder='Enter your Email' />
                    </div>
                    <div className="input-group">
                        <input name="password" id="" required placeholder='Enter Password' />
                    </div>


                    <input className='from-submit bg-primary' type="submit" value="Login" />
                </div>
                <div className='d-flex justify-content-around align-items-center'>
                    <div>
                        <Link className='form-link' to='/signup'>Create new account !  </Link>
                    </div>
                    <div>
                        <button className='form-link btn btn-link' >Forget Password !</button>
                    </div>
                </div>
                <button onClick={() => signInWithGoogle()} className='from-google my-2' type="submit">
                    <div className='img-google'>
                        <span> Sign Up with Google</span>
                    </div>
                </button>

            </form>
        </div>
    );
};

export default Login;