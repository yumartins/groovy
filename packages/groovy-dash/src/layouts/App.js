import { easing } from 'groovy-styles';
import styled from 'styled-components';

const {
  rubber,
} = easing;

export const Layout = styled.div`
  display: flex;
  height: 100%;
`;

export const View = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
  transition: all .8s ${rubber};
  margin-left: ${({ minimize }) => (minimize ? '72px' : '230px')};
`;
