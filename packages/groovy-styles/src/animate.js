import { keyframes } from 'styled-components';

/**
 * Handy CSS animations
 * for micro-interactions
 */

export const easing = {
  basic: 'ease-in-out',
  rubber: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
};

export const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
