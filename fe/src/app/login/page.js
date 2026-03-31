'use client'

import React, { useState } from "react";

import useAuth from "../hooks/useAuth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const { login, isPending } = useAuth();

    const onEmailChange = ({ target: { value } }) => {
        setEmail(value);
        setEmailError('');
    }

    const onPasswordChange = ({ target: { value } }) => {
        setPassword(value);
        setPasswordError('');
    }

    const onLogin = () => {
        if(email.trim() && password.trim()) {
            setEmailError('');
            setPasswordError('');

            login({ email, password });
            return
        }

        if(!email.trim()) {
            setEmailError('Email is required');
        }

        if(!password.trim()) {
            setPasswordError('Password is required');
        }
    }

    return (
        <div className="flex flex-col flex-1 justify-center items-center">
            <h1 className="mb-8">Login</h1>

            <div className="flex flex-col justify-center items-center">
                <div className="mb-2">
                    <input placeholder="Email" className="input" onChange={onEmailChange} value={email} type="email" />
                    {!!emailError && <p className="errorMsg">{emailError}</p>}
                </div>

                <div className="mb-4 ">
                    <input placeholder="Password" className="input" onChange={onPasswordChange} value={password} type="password" />
                    {!!passwordError && <p className="errorMsg">{passwordError}</p>}
                </div>

                <button onClick={onLogin} disabled={isPending} className="bg-blue-500 text-white px-4 py-2 rounded-2xl" type="submit">
                    {isPending ? 'Loading...' : 'Login'}
                </button>
            </div>
        </div>
    )
}

export default Login;