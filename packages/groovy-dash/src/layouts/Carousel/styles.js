import { colors } from 'groovy-styles';
import styled, { css } from 'styled-components';

const {
  grays,
  white,
  primary,
} = colors;

export const View = styled.div`
  width: 100%;
  position: relative;
`;

export const Title = styled.h5`
  position: absolute;
  z-index: 3;
`;

export const Image = styled.img`
  position: absolute;
  right: 0;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  z-index: 3;
  color: ${white};
`;

export const Items = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  min-height: 640px;

  ${Image},
  ${Content} {
    opacity: 0;
    top: 0;
    pointer-events: none;
  }

  ${({ selected }) => selected && css`
    position: relative;

    ${Image},
    ${Content} {
      opacity: 1;
      pointer-events: all;
    }

    &::before {
      content: "";
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(28% 72% at 72% -22%,rgba(9,9,10,0) 0%, ${grays._600} 162%);;
    }
  `}
`;

export const Bullets = styled.div``;
