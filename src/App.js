import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Registration from './components/Registration';
import Nav from './components/Nav';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import AccountPage from './components/AccountPage/AccountPage';
import { useEffect } from 'react';
import { auth } from './actions/user';
import NewPasswordForm from './components/NewPasswordForm';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <BrowserRouter>
        <div className="App">
          <Nav/>
          <div className='wrap'>
            {!isAuth &&
              <Switch>
                <Route path='/registration' component={Registration}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/forgot-password' component={NewPasswordForm}></Route>
              </Switch>}
              {isAuth && <AccountPage/>}
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
