import { useState, useRef, useEffect } from 'react';
import { Search } from 'react-feather';

import { useField } from '@unform/core';
import { bool, string } from 'prop-types';

import {
  Icon,
  View,
  Label,
  Error,
  Target,
  Wrapper,
} from './styles';

const Input = ({
  name,
  label,
  hasIcon,
  isSearch,
  ...rest
}) => {
  const [value, onValue] = useState('');

  const ref = useRef(null);

  const {
    error,
    fieldName,
    defaultValue,
    registerField,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <View error={error}>
      <Wrapper
        focus={value.length > 0}
        hasIcon={hasIcon}
      >
        <Label htmlFor={fieldName}>{label}</Label>

        {hasIcon && (
          <Icon>
            {isSearch && <Search />}
          </Icon>
        )}

        <Target
          {...rest}
          id={fieldName}
          ref={ref}
          defaultValue={defaultValue}
          onChange={(e) => onValue(e.target.value)}
        />
      </Wrapper>
      {error && <Error>{error}</Error>}
    </View>
  );
};

Input.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  hasIcon: bool,
  isSearch: bool,
};

Input.defaultProps = {
  hasIcon: false,
  isSearch: false,
};

export default Input;
