import { colors, typograph } from 'groovy-styles';
import styled from 'styled-components';

const {
  grays,
  primary,
} = colors;

const {
  size: font,
  weight,
  family,
} = typograph;

const sizes = {
  sm: 'sm',
  lg: 'lg',
};

const appearances = {
  white: 'white',
  primary: 'primary',
  secondary: 'secondary',
};

const View = styled.button`
  font-family: ${family};
  font-size: ${font.s2}px;
  line-height: 24px;
  font-weight: ${weight.bold};
  display: flex;
  align-items: center;
  border-radius: 56px;
  background-color: transparent;
  border: 1px solid transparent;

  /**
   * Appearences
   */
  ${({ appearance }) => appearance === appearances.white && `
    color: ${grays._300};
    border-color: ${grays._300};
  `}

  ${({ appearance }) => appearance === appearances.primary && `
    background-color: ${primary};
    color: ${grays._100};
  `}

  ${({ appearance }) => appearance === appearances.secondary && `
    color: ${primary};
    border-color: ${grays._300};
  `}

  /**
   * Sizes
   */
  ${({ size }) => size === sizes.sm && `
    padding: 8px 16px;
  `}

  ${({ size }) => size === sizes.lg && `
    padding: 14px 24px;
  `}
`;

export default View;
