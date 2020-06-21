import styled from 'styled-components';

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
  column-gap: 16px;
`;

export const Artist = styled.a`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 124px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const ListTrack = styled.article``;
