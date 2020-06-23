import UserContext from './UserContext';
import UserReducer from './UserReducer';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const UserState = (props) => {
  const initialState = {
    token: null,
    user: null,
    isAuthenticated: false,
    loading: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isAuthicated: state.isAuthenticated,
        loading: state.loading,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
