import { useState } from "react";
import Input from "./Input";
import { sendNewPassword } from "../actions/user";

const NewPasswordForm = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const getMessageInfo = async () => {
        const message = await sendNewPassword(email);
        setMessage(message);
    }
    return (
        <div>
            {!message && <div className='auth'>
                <p>Please enter your email so that we could send you a new password</p>
                <Input value={email} setValue={setEmail} type='email' placeholder='Email'/>
                <button className='authBtn' onClick={getMessageInfo}>Send</button>
            </div>}
            {message && <div className='auth'>{message}</div>}
        </div>
    );
}

export default NewPasswordForm;
