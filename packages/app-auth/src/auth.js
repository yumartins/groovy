import React, { useContext } from 'react';

import { useReducer, useStoreModule } from 'app-hooks';
import reducer from 'app-reduces';

import { auth } from './api';

/**
 * Default token
 */
const TOKEN_KEY = 'music-token';
const TOKEN_USER = 'music-user';

/**
 * Module context.
 */
export const AuthContext = React.createContext();
