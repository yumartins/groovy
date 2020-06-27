import { colors, typograph } from 'groovy-styles';
import styled from 'styled-components';

const {
  white,
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
  font-weight: ${weight.semiBold};
  display: flex;
  align-items: center;
  border-radius: 56px;
  background-color: transparent;
  border: 1px solid transparent;
  color: ${grays._100};

  /**
   * Appearences
   */
  ${({ appearance }) => appearance === appearances.white && `
    color: ${white};
    border-color: ${white};
  `}

  ${({ appearance }) => appearance === appearances.primary && `
    background-color: ${primary};
    box-shadow: 0px 4px 6px rgba(255, 210, 58, 0.3);
  `}

  ${({ appearance }) => appearance === appearances.secondary && `
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
