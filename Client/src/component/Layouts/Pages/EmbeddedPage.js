import React from 'react';
import '../../../App.css';
import AuthLink from './AuthLinks';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup/MainSignup';
import AdminSignup from '../Pages/Signup/AdminSignup';
import UserSignup from '../Pages/Signup/UserSignup';

const EmbeddedPage = () => {
  return (
    <Router>
      <div className='embedded-page'>
        <AuthLink />
        <Switch>
          <Route exact component={Signup} path='/Signup' />
          <Route exact component={Login} path='/Login' />
          <Route exact component={AdminSignup} path='/adminsignup' />
          <Route exact component={UserSignup} path='/usersignup' />
        </Switch>
      </div>
    </Router>
  );
};

export default EmbeddedPage;
