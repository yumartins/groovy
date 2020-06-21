import { colors, typograph } from 'groovy-styles';
import styled, { css } from 'styled-components';

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
  font-weight: ${weight.bold};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 56px;
  background-color: transparent;
  border: 1px solid transparent;

  /**
   * Appearences
   */
  ${({ appearance }) => appearance === appearances.white && css`
    color: ${grays._300};
    border-color: ${grays._300};
  `}

  ${({ appearance }) => appearance === appearances.primary && css`
    background-color: ${primary};
    color: ${white};
  `}

  ${({ appearance }) => appearance === appearances.secondary && css`
    color: ${primary};
    border-color: ${grays._400};
  `}

  /**
   * Sizes
   */
  ${({ size }) => size === sizes.sm && css`
    padding: 8px 16px;
  `}

  ${({ size, iconButton }) => size === sizes.lg && css`
    padding: ${iconButton ? 0 : '14px 24px'};
    width: ${iconButton ? '54px' : 'inherit'};
    height: ${iconButton ? '54px' : 'inherit'};

    svg {
      width: 20px;
      height: 20px;
    }
  `}
`;

export default View;
