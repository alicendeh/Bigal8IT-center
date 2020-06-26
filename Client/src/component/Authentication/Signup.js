import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../UserHook/UserContext';

const Signup = (props) => {
  const userContext = useContext(UserContext);
  const { register, isAuthenticated } = userContext;
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
  }, [isAuthenticated, props.history]);
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
    tel: '',
    password: '',
    password2: '',
    town: '',
    choer: '',
    role: '',
    pulpitre: '',
  });
  const {
    fname,
    lname,
    email,
    tel,
    password,
    town,
    choer,
    role,
    pulpitre,
    password2,
  } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    register({
      fname,
      lname,
      email,
      tel,
      password,
      town,
      choer,
      role,
      pulpitre,
    });
  };
  return (
    <form onSubmit={onSubmit} className='sign-up'>
      <h3>Cree votre compte</h3>
      <h5>connectez-vous et trouvez plus de 100 chansons religieuses</h5>
      <input
        type='text'
        name='fname'
        value={fname}
        onChange={onChange}
        placeholder='First Name'
      />
      <input
        type='text'
        name='lname'
        value={lname}
        onChange={onChange}
        placeholder='Last Name'
      />
      <input
        type='email'
        name='email'
        value={email}
        placeholder='Email'
        onChange={onChange}
      />
      <input
        type='number'
        name='tel'
        value={tel}
        placeholder='Telephone'
        onChange={onChange}
      />
      <input
        type='password'
        name='password'
        value={password}
        placeholder='Password'
        onChange={onChange}
      />
      <input
        type='password'
        name='password2'
        value={password2}
        onChange={onChange}
        placeholder='Password2'
      />
      <input
        type='text'
        name='town'
        value={town}
        placeholder='Town'
        onChange={onChange}
      />
      <br />
      <div className='choer'>
        <input
          type='text'
          name='choer'
          value={choer}
          onChange={onChange}
          placeholder='Noms du choer'
        />{' '}
      </div>

      <select value={role} name='role' onChange={onChange}>
        <option value='Alto' selected>
          Alto
        </option>
        <option value='Soprano'>Soprano</option>
        <option value='Teno'>Teno</option>
        <option value='Base'>Base</option>
      </select>
      <select value={pulpitre} name='pulpitre' onChange={onChange}>
        <option value='Alice' selected>
          Alice
        </option>
        <option value='Victoire'>Victoire</option>
        <option value='Austin'>Austin</option>
        <option value='Rodrigue'>Rodrigue</option>
      </select>
      <div className='input-text'></div>
      <input type='submit' value="S'INSCRIRE" />
    </form>
  );
};

export default Signup;
