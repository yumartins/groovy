import { colors, typograph } from 'groovy-styles';
import styled from 'styled-components';

import { H6, P2 } from '../../components/Title';

const {
  grays,
} = colors;

const {
  weight,
} = typograph;

export const View = styled.div`
  padding: 24px;
  background-color: ${grays._500};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${H6} {
    color: ${grays._100};
  }
  ${P2} {
    color: ${grays._300};
    font-weight: ${weight.semiBold};
  }
`;

export const Body = styled.div`
  margin-top: 24px;
  width: 100%;
`;
