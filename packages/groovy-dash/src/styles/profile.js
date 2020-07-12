import { colors, typograph } from 'groovy-styles';
import styled from 'styled-components';

import { H6, P2 } from '../components/Title';

const {
  grays,
  primary,
} = colors;

const {
  weight,
} = typograph;

export const View = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  padding-left: 80px;
  max-height: 524px;
  height: 100%;
  display: flex;
  align-items: center;

  img {
    width: 148px;
    height: 148px;
    object-fit: cover;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 32px;
    align-items: flex-start;

    ${H6} {
      letter-spacing: 1px;
      padding: 4px 8px;
      border-radius: 4px;
      background-color: rgba(85, 110, 252, .2);
      color: ${primary};
      margin-bottom: 8px;
    }

    ${P2} {
      color: ${grays._300};
      margin-top: 8px;
      font-weight: ${weight.regular};
      letter-spacing: .4px;
    }
  }
`;
