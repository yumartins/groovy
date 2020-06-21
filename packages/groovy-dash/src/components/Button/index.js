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
    iconButton={hasIcon}
  >
    {! hasIcon
      ? label
      : children}
  </View>
);

Button.propTypes = {
  label: string,
  submit: bool,
  hasIcon: bool,
};

Button.defaultProps = {
  label: '',
  submit: false,
  hasIcon: false,
};

export default Button;
