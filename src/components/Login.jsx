import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { login } from "../actions/user";
import Input from "./Input";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    return (
        <div className='auth'>
            <div className='header'>
                Login
            </div>
            <Input value={email} setValue={setEmail} type='email' placeholder='Email'/>
            <Input value={password} setValue={setPassword} type='password' placeholder='Password'/>
            <button className='authBtn' onClick={() => dispatch(login(email, password))}>Login</button>
            <NavLink to='/forgot-password' style={{marginTop: '1em'}}>Forgot Password?</NavLink>
        </div>
    );
}

export default Login;