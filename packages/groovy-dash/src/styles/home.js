import { colors } from 'groovy-styles';
import styled from 'styled-components';

const {
  grays,
} = colors;

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
`;

export const Genres = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 16px;
`;

export const Playlists = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 24px;
  column-gap: 24px;
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
