import { bool, string } from 'prop-types';

import View from './styles';

const Button = ({
  label,
  submit,
  hasIcon,
  children,
  ...rest
}) => (
  <View
    {...rest}
    type={submit ? 'submit' : 'button'}
  >
    {! hasIcon
      ? label
      : children}
  </View>
);

Button.propTypes = {
  label: string.isRequired,
  submit: bool,
  hasIcon: bool,
};

Button.defaultProps = {
  submit: false,
  hasIcon: false,
};

export default Button;
