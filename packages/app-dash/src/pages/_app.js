import { useEffect } from 'react';

import { AuthProvider } from 'app-auth';
import { useAuth } from 'app-hooks';
import {
  bool,
  func,
  array,
  string,
  number,
  object,
  objectOf,
  oneOfType,
} from 'prop-types';

const App = ({ Component, pageProps, router }) => {
  const { query } = router;

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

    return <Component {...pageProps} />;
  };

  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

App.propTypes = {
  router: objectOf(oneOfType([
    func, bool, string, number, object, array,
  ])),
  Component: func,
  pageProps: objectOf(oneOfType([
    string, number, object, array,
  ])),
};

App.defaultProps = {
  router: {},
  Component: () => {},
  pageProps: {},
};

export default App;
