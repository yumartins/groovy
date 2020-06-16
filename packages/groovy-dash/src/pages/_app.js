import { useEffect } from 'react';

import { AuthProvider } from 'groovy-auth';
import { useAuth } from 'groovy-hooks';
import { GlobalStyles } from 'groovy-styles';
import { useRouter } from 'next/router';
import {
  func,
  array,
  string,
  number,
  object,
  objectOf,
  oneOfType,
} from 'prop-types';

const App = ({ Component, pageProps }) => {
  /**
   * Router.
   */
  const Router = () => {
    const { query } = useRouter();

    const {
      run,
      isLoggedIn,
    } = useAuth();

    useEffect(() => {
      const fetchInitial = async () => {
        /**
         * Check query and
         * logged user.
         */
        await run('login', query.access_token);

        /**
         * Check auth.
         */
        await run('check');
      };

      fetchInitial();
    }, []);

    if (isLoggedIn) {
      return <Component {...pageProps} />;
    }

    return <h1>Loading...</h1>;
  };

  return (
    <AuthProvider>
      <GlobalStyles />
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
