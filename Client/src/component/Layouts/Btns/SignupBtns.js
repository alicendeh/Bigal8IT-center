import React from 'react';

import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AdminSignup from '../Pages/Signup/AdminSignup';

const SignupBtns = () => {
  return (
    <div className='signup-btn'>
      <ul>
        <Link to='/adminsignup' className='auth-li2'>
          {' '}
          <li className='admin-btn'>ADMINISTRATEUR</li> <br />{' '}
        </Link>
        <h4> Ou</h4>
        <br />
        <Link to='/usersignup' className='auth-li2'>
          {' '}
          <li className='user-btn'>UTILISATEUR</li>
        </Link>
      </ul>
    </div>
  );
};

export default SignupBtns;
