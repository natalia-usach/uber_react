import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "./Input";
import { sendNewPassword } from "../actions/user";

const NewPasswordForm = () => {

    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    return (
        <div className='auth'>
            <p>Please enter your email so that we could send you a new password</p>
            <Input value={email} setValue={setEmail} type='email' placeholder='Email'/>
            <button className='authBtn' onClick={() => dispatch(sendNewPassword(email))}>Send</button>
        </div>
    );
}

export default NewPasswordForm;