import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../UserHook/UserContext';

const Signup = (props) => {
  const userContext = useContext(UserContext);
  const { login, isAuthenticated } = userContext;
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
  }, [isAuthenticated, props.history]);

  const [user, setUser] = useState({
    tel: '',
    password: '',
  });
  const { tel, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    login({ tel, password });
    setUser({ tel: '', password: '' });
  };
  return (
    <form onSubmit={onSubmit} className='sign-in'>
      <h3>Cree votre compte</h3>
      <h5>connectez-vous et trouvez plus de 100 chansons religieuses</h5>
      <div className='input-text'>
        <input
          type='number'
          name='tel'
          value={tel}
          placeholder='Telephone'
          onChange={onChange}
        />
      </div>
      <div className='input-text'>
        <input
          type='password'
          name='password'
          value={password}
          placeholder='Password'
          onChange={onChange}
        />
      </div>

      <input type='submit' value="S'INSCRIRE" />
    </form>
  );
};

export default Signup;
