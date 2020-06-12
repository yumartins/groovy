import {
  func,
  array,
  string,
  number,
  object,
  objectOf,
  oneOfType,
} from 'prop-types';

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

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
