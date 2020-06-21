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

  & > ${H6} {
    position: absolute;
    z-index: 3;
    left: 80px;
    top: 126px;
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
  display: flex;
  flex-direction: column;

  ${H1},
  ${H6},
  button {
    top: -48px;
    position: relative;
  }

  ${H1} {
    max-width: 624px;
    transition: all .8s ${rubber};
  }

  ${H6} {
    color: ${grays._300};
    margin-bottom: 12px;
    letter-spacing: .8px;
    transition: all 1.2s ${rubber};
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 32px;

    button {
      position: relative;

      &:first-child {
        transition: all .8s ${rubber};
      }

      &:last-child {
        transition: all 1.2s ${rubber};
      }
    }

    a {
      margin-right: 24px;
    }
  }
`;

export const Items = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  min-height: 664px;
  z-index: 0;
  overflow-y: hidden;

  ${Image},
  ${Content} {
    opacity: 0;
    top: 0;
    pointer-events: none;
    transition: all 1s ${rubber}; 
  }

  ${Image} {
    top: -80px;
  }

  ${({ selected }) => selected && css`
    z-index: 1;
    position: relative;

    ${Image},
    ${Content} {
      opacity: 1;
      pointer-events: all;
    }

    ${Content} {
      ${H1},
      ${H6},
      button {
        top: 0;
      }
    }

    ${Image} {
      top: 0;
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
