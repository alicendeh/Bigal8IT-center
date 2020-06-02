import React, { useState } from 'react';

const AdminSignup = () => {
  const [admin, setAdmin] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    password2: '',
    tel: '',
    town: '',
    choer: '',
    role: 'Soprane',
    pupitre: 'ddd',
  });
  const {
    fname,
    email,
    password,
    password2,
    tel,
    lname,
    town,
    pupitre,
    choer,
    role,
  } = admin;
  const onClick = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(
      fname,
      email,
      password,
      password2,
      tel,
      lname,
      town,
      pupitre,
      choer,
      role
    );
    setAdmin({
      fname: '',
      lname: '',
      email: '',
      password: '',
      password2: '',
      tel: '',
      town: '',
      role: '',
      pupitre: '',
      choer: '',
    });
  };

  return (
    <form className='admin-form' onSubmit={onSubmit}>
      <h2>créer un compte Administrative</h2>

      <input
        type='text'
        placeholder='Nom'
        name='fname'
        value={fname}
        onChange={onClick}
      />

      <input
        type='text'
        placeholder='Prenom'
        name='lname'
        value={lname}
        onChange={onClick}
      />
      <input
        type='email'
        placeholder='Address Mail'
        name='email'
        value={email}
        onChange={onClick}
      />
      <input
        type='password'
        placeholder='Mot de passe'
        name='password'
        value={password}
        onChange={onClick}
      />
      <input
        type='password'
        placeholder='Confirme mot de passe'
        name='password2'
        value={password2}
        onChange={onClick}
      />
      <input
        type='number'
        placeholder='Numero de telephone'
        name='tel'
        value={tel}
        onChange={onClick}
      />
      <input
        type='text'
        placeholder='Ville'
        name='town'
        value={town}
        onChange={onClick}
      />
      <input
        type='text'
        placeholder='Nom de choer'
        name='choer'
        value={choer}
        onChange={onClick}
      />
      <select name='role' value={role} onChange={onClick}>
        <option value='' disabled>
          Choisir un role
        </option>
        <option value='alto'>Alto</option>
        <option value='soprano'>soprano</option>
        <option value='base'>base</option>
        <option value='teno'>teno</option>
      </select>
      <select name='pupitre' value={pupitre} onChange={onClick}>
        <option value=' Choisir un pupitre' disabled>
          Choisir un pupitre
        </option>
        <option value='alice'>alice</option>
        <option value='mary'>mary</option>
      </select>
      <input type='submit' value="S'INSCRIRE" />
    </form>
  );
};

export default AdminSignup;
