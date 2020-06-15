import React from 'react';

import { AuthContext, useReducer, useStoreModule } from 'app-hooks';
import reducer from 'app-reduces';

import { api } from './api';

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
   * Fetch user.
   */
  const fetchUser = async (token) => {
    if (! token) return null;

    api.defaults.headers.common.Authorization = `${token}`;

    try {
      const { data } = await api.get('/me');

      await localStorage.setItem(TOKEN_USER, data);

      return data;
    } catch (err) {
      api.defaults.headers.common.Authorization = '';
    }

    return localStorage.getItem(TOKEN_USER);
  };

  /**
   * Check if user is authenticated.
   */
  const check = async (force = false) => {
    const token = await localStorage.getItem(TOKEN_KEY, state.token);

    try {
      if (checked && ! force) throw user;

      throw await fetchUser(token);
    } catch (user) {
      const isLoggedIn = !! (user && user.id);

      dispatch('merge', {
        user: isLoggedIn
          ? user
          : null,
        token,
        isLoggedIn,
        checked: true,
      });

      return isLoggedIn;
    }
  };

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
    check,
    login,
  });

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
