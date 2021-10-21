import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../reducers/userReducer";
import logo from '../images/logo.jpg';
import { useEffect, useState } from "react";

const Nav = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.user.isAuth);
    const [name, setName] = useState('');

    useEffect(() => {
        setName(localStorage.getItem('userName'));
    }, []);

    return (
        <div>
            <div className='nav'>
                <div className='logo'>
                    <img src={logo} alt=''/>
                </div>
                {!isAuth && <div className='navLink'>
                    <NavLink to='/registration'>Register</NavLink>
                </div>}
                {!isAuth && <div className='navLink'>
                    <NavLink to='/login'>Login</NavLink>
                </div>}
                {isAuth && <div>Welcome {name}</div>}
                {isAuth && <div className='navLink' onClick={() => dispatch(logout())}>Logout</div>}
            </div>
        </div>
                    
    );
}

export default Nav;