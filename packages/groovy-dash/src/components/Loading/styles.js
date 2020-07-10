import { colors } from 'groovy-styles';
import styled, { css, keyframes } from 'styled-components';

const animDrt = '0.4s';
const animEase = 'cubic-bezier(.6,.05,.15,.95)';

const sizes = {
  sm: 'sm',
  lg: 'lg',
};

const appearances = {
  primary: 'primary',
  secondary: 'secondary',
};

const bouncing = keyframes`
  0% {
		transform: translate3d(0, 2px, 0) scale(1.2, 0.85);
	}

	100% {
		transform: translate3d(0, -10px, 0) scale(0.9, 1.1);
	}
`;

export const Dot = styled.span`
  border-radius: 50%;
`;

export const Dots = styled.div`
  width: ${({ size }) => (size === sizes.sm ? '40px' : '48px')};
	display: flex;
	justify-content: space-between;
	align-items: center;
  min-height: 16px;

  ${({ appearance }) => (appearance === appearances.primary && css`
    ${Dot} {
      background-color: ${colors.primary}
    }
  `)};

  ${({ appearance }) => (appearance === appearances.secondary && css`
    ${Dot} {
      background-color: ${colors.grays._100}
    }
  `)};

  ${({ size }) => size === sizes.sm && css`
    ${Dot} {
      width: 8px;
      height: 8px;
    }
  `}

  ${({ size }) => size === sizes.lg && css`
    ${Dot} {
      width: 10px;
      height: 10px;
    }
  `}

  ${Dot} {
    &:nth-child(1) {
			animation: ${bouncing} ${animDrt} alternate infinite ${animEase};
		}

		&:nth-child(2) {
			animation: ${bouncing} ${animDrt} 0.1s alternate infinite ${animEase} backwards;
		}

		&:nth-child(3) {
			animation: ${bouncing} ${animDrt} 0.2s alternate infinite ${animEase} backwards;
		}
  }
`;
