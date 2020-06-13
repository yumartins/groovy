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
   * Authenticates user.
   */
  const login = async () => {
    const response = await axios.request({
      url: '/api/token',
      method: 'post',
      baseURL: 'https://accounts.spotify.com',
      auth: {
        username: '1f8771683cc24a359bdb0abc34e3599c', // This is the client_id
        password: 'cd41367f9bf74cc8b801813b206101f0', // This is the client_secret
      },
      data: {
        grant_type: 'authorization_code',
        authorization_url: 'https://accounts.spotify.com/authorize',
        access_token_url: 'https://accounts.spotify.com/api/token',
        redirect_url: 'https://yumartins.com.br/spotify',
        scope: 'user-modify-playback-state',
      },
    });

    console.log(response);
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
