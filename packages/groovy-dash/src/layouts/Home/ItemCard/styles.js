import { colors, typograph } from 'groovy-styles';
import styled, { css } from 'styled-components';

import { H5, P2 } from '../../../components/Title';

const {
  grays,
  white,
  primary,
} = colors;

const {
  weight,
} = typograph;

const View = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    width: 100%;
    height: 124px;
    object-fit: cover;
    border-radius: 8px;
  }

  li {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: ${weight.bold};
    letter-spacing: 1px;
    padding: 2px 4px;
    border-radius: 4px;
    background-color: rgba(85, 110, 252, .2);
    color: ${primary};
    margin: 16px 0 8px 0;
    list-style: none;
    width: fit-content;
  }

  ${H5} {
    color: ${white};
    font-weight: ${weight.bold};
    margin-top: 16px;
  }

  ${P2} {
    line-height: 24px;
    font-weight: ${weight.regular}
  }

  ${({ isHorizontal }) => isHorizontal && css`
    flex-direction: row;
    align-items: center;
    padding: 8px;
    border-radius: 8px;
    background-color: ${grays._400};

    img {
      width: 48px;
      height: 48px;
    }

    ${H5} {
      margin: 0 0 0 16px;
    }
  `}

  ${({ hasCategories }) => hasCategories && css`
    ${H5} {
      margin-top: 0;
    }
  `}
`;

export default View;
