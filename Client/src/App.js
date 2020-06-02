import React, { Fragment } from 'react';
import Navbar from './component/Layouts/Navbar';
import EmbeddedPage from './component/Layouts/Pages/EmbeddedPage';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <EmbeddedPage />
    </Fragment>
  );
};

export default App;
