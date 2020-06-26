import React, { useReducer } from 'react';
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import axios from 'axios';

const UserState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: null,
    loading: true,
    error: null,
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);
  // register user
  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/user', formData, config);
      dispatch({ payload: res.data, type: 'REGISTER_SUCCESS' });
    } catch (err) {
      dispatch({ type: 'REGISTER_FAIL', payload: err.response.data.msg });
    }
  };
  // user login
  const login = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/auth', formData, config);
      dispatch({ payload: res.data, type: 'LOGIN_SUCCESS' });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAIL', payload: err.response.data.msg });
    }
  };
  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        register,
        login,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
