import React from 'react';

import { string } from 'prop-types';

import { Dot, Dots } from './styles';

const Loading = ({
  size,
  appearance,
}) => (
  <Dots
    size={size}
    appearance={appearance}
  >
    <Dot />
    <Dot />
    <Dot />
  </Dots>
);

Loading.propTypes = {
  size: string,
  appearance: string,
};

Loading.defaultProps = {
  size: 'sm',
  appearance: 'primary',
};

export default Loading;
