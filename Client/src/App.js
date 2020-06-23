import React, { Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import UserState from './component/UserHook/UserState';

const App = () => {
  return (
    <UserState>
      <Fragment></Fragment>
    </UserState>
  );
};

export default App;
