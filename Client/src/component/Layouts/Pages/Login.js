import React, { useState } from 'react';

const Login = () => {
  const [admin, setAdmin] = useState({
    tel: '',
    password: '',
  });
  const { password, tel } = admin;
  const onClick = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(password, tel);
    setAdmin({
      password: '',
      tel: '',
    });
  };

  return (
    <form className='login-form' onSubmit={onSubmit}>
      <h2>Identifier Vous </h2>
      <input
        type='number'
        placeholder='Numero de telephone'
        name='tel'
        value={tel}
        onChange={onClick}
      />
      <input
        type='password'
        placeholder='Mot de passe'
        name='password'
        value={password}
        onChange={onClick}
      />

      <input type='submit' value="S'INSCRIRE" />
    </form>
  );
};

export default Login;
