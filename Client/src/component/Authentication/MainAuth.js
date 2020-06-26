import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

const MainAuth = () => {
  const [change, setChange] = useState({ toggle: 0 });
  const { toggle } = change;
  const click = () => {
    setChange({ toggle: 1 });
  };
  const click1 = () => {
    setChange({ toggle: 0 });
  };
  return (
    <Router>
      <div className='main-auth'>
        <ul>
          <Link
            to='/signup'
            className='link1'
            onClick={click}
            style={{
              backgroundColor: toggle === 1 ? 'white' : '#25eabb',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            S'INSCRIRE
          </Link>

          <Link
            to='/login'
            className='link2'
            onClick={click1}
            style={{
              backgroundColor: toggle === 0 ? 'white' : '#25eabb',
              border: 'none',

              cursor: 'pointer',
            }}
          >
            S'INDENTIFIER
          </Link>
        </ul>

        <Switch>
          <Signup component={Signup} path='/signup' exact />
          <Login component={Login} path='/login' exact />
        </Switch>
      </div>
    </Router>
  );
};

export default MainAuth;
