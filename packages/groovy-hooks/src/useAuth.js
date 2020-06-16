import React, { useContext } from 'react';

/**
 * Module context.
 */
export const AuthContext = React.createContext();

/**
 * Module hook.
 */
export const useAuth = () => useContext(AuthContext);
