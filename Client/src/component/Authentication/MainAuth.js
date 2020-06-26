import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Redirect from './Redirect';

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
          <Route component={Signup} path='/signup' exact />
          <Route component={Login} path='/login' exact />
          <Route component={Redirect} path='/' exact />
        </Switch>
      </div>
    </Router>
  );
};

export default MainAuth;
