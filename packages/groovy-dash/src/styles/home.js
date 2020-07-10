import { colors, typograph } from 'groovy-styles';
import styled from 'styled-components';

import { H5, P2 } from '../components/Title';

const {
  white,
  grays,
  primary,
} = colors;

const {
  weight,
} = typograph;

export const View = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 1fr;
  column-gap: 24px;
  padding: 0 24px;
  position: relative;
  top: -80px;
  z-index: 3;
`;

export const ListAlbums = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 24px;
`;

export const Artists = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 24px;

  a {
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
      font-size: 10px;
      font-weight: ${weight.bold};
      letter-spacing: 1px;
      padding: 2px 4px;
      border-radius: 4px;
      background-color: rgba(85, 110, 252, .2);
      color: ${primary};
      margin: 16px 0 8px 0;
    }

    ${H5} {
      color: ${white};
      font-weight: ${weight.bold};
    }
  }
`;

export const Genres = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 24px;

  a {
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 8px;
    background-color: ${grays._400};

    img {
      width: 48px;
      height: 48px;
      object-fit: cover;
      border-radius: 8px;
    }

    ${H5} {
      color: ${grays._100};
      margin-left: 16px;
      font-weight: ${weight.bold};
    }
  }
`;

export const Playlists = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 24px;
  column-gap: 24px;

  a {
    display: flex;
    flex-direction: column;

    img {
      height: 124px;
      object-fit: cover;
      border-radius: 8px;
    }

    ${H5} {
      color: ${white};
      font-weight: ${weight.bold};
      margin: 16px 0 4px 0;
    }

    ${P2} {
      line-height: 24px;
      font-weight: ${weight.regular}
    }
  }
`;

export const ListAlbumsBottom = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  column-gap: 24px;
`;

export const ListTrack = styled.article`
  width: 100%;
`;

export const ViewIsLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${grays._600};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
