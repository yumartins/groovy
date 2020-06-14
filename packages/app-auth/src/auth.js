import React from 'react';

import { AuthContext, useReducer, useStoreModule } from 'app-hooks';
import reducer from 'app-reduces';
import axios from 'axios';

/**
 * Default token
 */
const TOKEN_KEY = 'music-token';
const TOKEN_USER = 'music-user';

/**
 * Module provider.
 */
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    token: '',
    checked: false,
    isLoggedIn: false,
  });

  const {
    user,
    checked,
  } = state;

  /**
   * Check if user is authenticated.
   */
  const check = async (force = false) => {};

  /**
   * Authenticates user.
   */
  const login = async (key) => {
    await localStorage.setItem(TOKEN_KEY, key);

    return check(true);
  };

  /**
   * Provider value.
   */
  const value = useStoreModule(state, {
    login,
  });

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
