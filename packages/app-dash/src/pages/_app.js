import { useEffect } from 'react';

import { AuthProvider } from 'app-auth';
import { useAuth } from 'app-hooks';
import {
  func,
  array,
  string,
  number,
  object,
  objectOf,
  oneOfType,
} from 'prop-types';

const App = ({ Component, pageProps, router }) => {
  /**
   * Router.
   */
  const Router = () => {
    const {
      run,
      isLoggedIn,
    } = useAuth();

    useEffect(() => {
      const fetchInitial = async () => {
        /**
         * Check auth.
         */
        await run('check');
      };

      fetchInitial();
    }, []);

    console.log(router, isLoggedIn);

    return <Component {...pageProps} />;
  };

  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

App.propTypes = {
  Component: func,
  pageProps: objectOf(oneOfType([
    string, number, object, array,
  ])),
};

App.defaultProps = {
  Component: () => {},
  pageProps: {},
};

export default App;
