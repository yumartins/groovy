import { colors, easing, typograph } from 'groovy-styles';
import styled, { css } from 'styled-components';

import { H6, P2 } from '../../components/Title';

const {
  grays,
  primary,
} = colors;

const {
  rubber,
} = easing;

const {
  size,
} = typograph;

export const Logo = styled.a`
  display: flex;

  svg path {
    &:first-child {
      stroke: ${grays._100};
    }

    &:nth-child(2) {
      fill: ${grays._100};
    }
  }
`;

export const Navigate = styled.nav`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 56px;
  row-gap: 48px;
  transition: all .8s ${rubber};
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;

  ${H6} {
    color: ${grays._300};
    letter-spacing: 1.8px;
    position: relative;
    transition: all .8s ${rubber};
    opacity: 1;
    left: 0;
  }
`;

export const Item = styled.a`
  display: flex;
  align-items: center;
  margin-top: 16px;
  padding: 4px 0;

  ${P2} {
    position: relative;
    left: 0;
    opacity: 1;
    transition: all .8s ${rubber};
  }

  svg {
    margin-right: 8px;
    width: ${size.s3}px;
    height: ${size.s3}px;
    color: ${grays._100};
  }

  ${({ selected }) => selected && css`
    svg,
    ${P2} {
      color: ${primary};
    }

    &::before {
      content: "";
      width: 2px;
      height: 16px;
      right: 0;
      position: absolute;
      background-color: ${primary};
    }
  `}
`;

export const Minimize = styled.button`
  position: absolute;
  bottom: 48px;
  color: ${grays._100};
  padding: 0;
  display: flex;
  align-items: center;

  svg {
    transform: rotate(0);
  }

  ${P2} {
    margin-left: 16px;
    position: relative;
  }

  svg,
  ${P2} {
    transition: all .8s ${rubber};
  }
`;

export const View = styled.div`
  background-color: ${grays._500};
  padding: 48px 96px 48px 48px; 
  height: 100vh;
  position: fixed;
  top: 0;
  transition: all .8s ${rubber};

  ${({ minimize }) => minimize && css`
    padding: 48px 24px;

    ${Logo} {
      width: 24px;
    }

    ${Navigate} {
      margin-top: 32px;
      row-gap: 0;
      width: 24px;
    }

    ${Item} {
      margin-top: 32px;

      svg {
        margin-right: 0;
      }
    }

    ${Minimize} svg {
      transform: rotate(180deg);
    }

    ${Item} ${P2},
    ${Minimize} ${P2},
    ${ListItems} ${H6}{
      left: -48px;
      opacity: 0;
      pointer-events: none;
      display: none;
    }
  `}
`;
