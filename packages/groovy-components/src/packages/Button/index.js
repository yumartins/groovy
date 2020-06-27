import React from 'react';

import PropTypes from 'prop-types';

import View from './styles';

const {
  bool,
  string,
} = PropTypes;

const Button = ({
  label,
  submit,
  ...rest
}) => (
  <View
    {...rest}
    type={submit ? 'submit' : 'button'}
  >
    {label}
  </View>
);

Button.propTypes = {
  label: string.isRequired,
  submit: bool,
};

Button.defaultProps = {
  submit: false,
};

export default Button;
