import React, { Fragment, useEffect } from 'react';
// import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import UserState from './component/UserHook/UserState';
import MainAuth from './component/Authentication/MainAuth';
const App = () => {
  // useEffect(() => {
  //   M.AutoInit();
  // });
  return (
    <UserState>
      <Fragment>
        <MainAuth />
      </Fragment>
    </UserState>
  );
};

export default App;
