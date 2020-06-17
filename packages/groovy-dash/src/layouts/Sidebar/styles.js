import { colors } from 'groovy-styles';
import styled from 'styled-components';

export const View = styled.div`
  background-color: ${colors.grays._500};
  padding: 32px; 
`;

export const Logo = styled.a`
  display: flex;

  svg path {
    &:first-child {
      stroke: ${colors.white};
    }

    &:nth-child(2) {
      fill: ${colors.white};
    }
  }
`;

export const Navigate = styled.nav`
  display: grid;
  grid-template-columns: repeat(1fr);
  margin-top: 56px;
  row-gap: 48px;
`;

export const Title = styled.h5``;

export const ListItems = styled.div``;

export const Items = styled.ul``;

export const Item = styled.a``;
