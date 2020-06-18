import { Form as Unform } from '@unform/web';
import { colors, typograph } from 'groovy-styles';
import styled from 'styled-components';

const {
  grays,
  primary,
} = colors;

const {
  size,
  weight,
} = typograph;

export const View = styled.nav`
  width: 100%;
  top: 0;
  position: fixed;
  padding: 24px 32px;
  display: flex;
  align-items: center;
`;

export const Navigate = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${weight.extraBold};
  font-size: ${size.s2}px;
  color: ${({ selected }) => (selected ? primary : grays._300)};
  padding: 4px 8px;
  cursor: pointer;
  
  &:not(:first-child) {
    margin-left: 8px;
  }
`;

export const Form = styled(Unform)`
  max-width: 324px;
  width: 100%;
  margin-left: 88px;
`;
