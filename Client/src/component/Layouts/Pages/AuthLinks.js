import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const AuthLinks = () => {
  const [Click, setClick] = useState({ click: 0 });
  const { click } = Click;

  const clickedLi1 = () => {
    setClick({ click: 0 });
  };
  const clickedLi2 = () => {
    setClick({ click: 1 });
  };
  return (
    <Fragment>
      <ul className='auth-ul'>
        <Link to='/signup' className='auth-li'>
          {' '}
          <li
            className='auth-li2'
            onClick={clickedLi2}
            style={{
              backgroundColor:
                click == 1 ? 'white' : 'rgba(211, 207, 207, 0.3)',
            }}
          >
            S'INSCRIRE
          </li>
        </Link>
        <Link to='/login' className='auth-li2'>
          <li
            className='auth-li1'
            onClick={clickedLi1}
            style={{
              backgroundColor:
                click == 0 ? 'white' : 'rgba(211, 207, 207, 0.3)',
            }}
          >
            S'IDENTIFIER
          </li>
        </Link>
      </ul>
    </Fragment>
  );
};

export default AuthLinks;
