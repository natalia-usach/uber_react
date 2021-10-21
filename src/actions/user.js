import axios from 'axios';
import { setUser } from '../reducers/userReducer';

export const registration = async (email, password, role) => {
    try {
        const response = await axios.post('http://localhost:8080/api/auth/register', {
            email,
            password, 
            role
        });
        alert(response.data.message);
    } catch(e) {
        alert(e.response.data.message);
    }
}

export const login = (email, password) => {

        return async dispatch => {
            try {
                const response = await axios.post('http://localhost:8080/api/auth/login', {
                    email,
                    password
                });
                console.log(response)
                dispatch(setUser(response.data.user));
                localStorage.setItem('token', response.data.jwt_token);
                localStorage.setItem('userName', email);
            } catch(e) {
                alert(e.response.data.message);
            }
        }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get('http://localhost:8080/api/auth/auth', {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            console.log(response)
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.jwt_token);
        } catch(e) {
            localStorage.removeItem('token');
        }
    }
}

export const sendNewPassword = async (email) => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/forgot_password', {
                email
            });
            alert(response.data.message);
        } catch(e) {
            alert(e.response.data.message);
        }
}

export const getProfileInfo = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/users/me', {});
        alert(response.data.message);
    } catch(e) {
        alert(e.response.data.message);
    }
}