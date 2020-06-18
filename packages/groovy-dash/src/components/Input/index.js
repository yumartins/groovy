import { useState, useRef, useEffect } from 'react';

import { useField } from '@unform/core';
import { string } from 'prop-types';

import {
  View,
  Label,
  Error,
  Target,
  Wrapper,
} from './styles';

const Input = ({
  name,
  label,
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
    <View
      error={error}
      focus={value.length > 0}
    >
      <Wrapper>
        <Label htmlFor={fieldName}>{label}</Label>
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
};

export default Input;
