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
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  height: 8px;
  margin: 8px 0;
  padding: 0;
  border-radius: 50%;
  background-color: ${({ selected }) => (selected ? primary : grays._300)};
  opacity: ${({ selected }) => (selected ? 1 : '.48')};
  
`;
