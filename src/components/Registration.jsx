import { useState } from "react";
import { registration } from "../actions/user";
import Input from "./Input";

const Registration = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    return (
        <div className='auth'>
            <div className='header'>
                Registration
            </div>
            <Input value={email} setValue={setEmail} type='email' placeholder='Email'/>
            <Input value={password} setValue={setPassword} type='password' placeholder='Password'/>
            <Input value={role} setValue={setRole} type='text' placeholder='Role: SHIPPER or DRIVER'/>
            <button className='authBtn' onClick={() => registration(email, password, role)}>Register</button>
        </div>
    );
}

export default Registration;