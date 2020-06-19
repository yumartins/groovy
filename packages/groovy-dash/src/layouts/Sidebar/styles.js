import { colors, typograph } from 'groovy-styles';
import styled, { css } from 'styled-components';

import { H6, P2 } from '../../components/Title';

const {
  grays,
  primary,
} = colors;

const {
  size,
} = typograph;

export const View = styled.div`
  background-color: ${grays._500};
  padding: 48px 96px 48px 48px; 
  height: 100vh;
  position: relative;
`;

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
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;

  ${H6} {
    color: ${grays._300};
    letter-spacing: 1.8px;
  }
`;

export const Item = styled(P2)`
  display: flex;
  align-items: center;
  margin-top: 16px;
  padding: 4px 0;

  ${({ selected }) => selected && css`
    color: ${primary};

    &::before {
      content: "";
      width: 2px;
      height: 16px;
      right: 0;
      position: absolute;
      background-color: ${primary};
    }
  `}

  svg {
    margin-right: 8px;
    width: ${size.s3}px;
    height: ${size.s3}px;
  }
`;
