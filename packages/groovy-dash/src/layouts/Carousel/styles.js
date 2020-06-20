import { colors, easing } from 'groovy-styles';
import styled, { css } from 'styled-components';

import { H1, H6 } from '../../components/Title';

const {
  grays,
  white,
  primary,
} = colors;

const {
  rubber,
} = easing;

export const View = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${H6} {
    position: absolute;
    z-index: 3;
    left: 80px;
    top: 124px;
    letter-spacing: 1.2px;
    color: ${grays._100};
  }
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
  padding-left: 80px;

  ${H1} {
    max-width: 624px;
  }
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

    &::before,
    &::after {
      content: "";
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    } 

    &::before {
      background: linear-gradient(260deg, rgba(9, 9, 10, .6) 0, rgba(9, 9, 10, 1) 50%);
    }

    &::after {
      background: linear-gradient(to bottom, rgba(9, 9, 10, 0) 50%, rgba(9, 9, 10, 1));
    }
  `}
`;

export const Bullets = styled.div`
  z-index: 3;
  position: absolute;
  right: 48px;
  display: flex;
  flex-direction: column;
`;

export const Bullet = styled.button`
  width: 8px;
  height: ${({ selected }) => (selected ? '16px' : '8px')};
  margin: 8px 0;
  padding: 0;
  border-radius: 24px;
  background-color: ${({ selected }) => (selected ? primary : grays._300)};
  opacity: ${({ selected }) => (selected ? 1 : '.48')};
  transition: all .8s ${rubber};
`;
