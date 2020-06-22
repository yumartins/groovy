import { colors, typograph } from 'groovy-styles';
import styled from 'styled-components';

import { H5 } from '../components/Title';

const {
  white,
  primary,
} = colors;

const {
  size,
  weight,
} = typograph;

export const View = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 24px;
  padding: 0 24px;
  position: relative;
  top: -80px;
  z-index: 3;
`;

export const ListAlbums = styled.article``;

export const Artists = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 24px;
`;

export const Artist = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    width: 100%;
    height: 124px;
    object-fit: cover;
    border-radius: 8px;
  }

  span {
    text-transform: uppercase;
    font-size: ${size.s1}px;
    font-weight: ${weight.bold};
    letter-spacing: 1px;
    padding: 2px 4px;
    border-radius: 4px;
    background-color: rgba(85, 110, 252, .2);
    color: ${primary};
    margin: 12px 0 4px 0;
  }

  ${H5} {
    color: ${white};
    font-weight: ${weight.bold};
  }
`;

export const ListTrack = styled.article``;
