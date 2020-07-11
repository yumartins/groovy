import styled from 'styled-components';

export const View = styled.div`
  display: flex;
  align-items: center;

  .swiper-container {
    max-width: 348px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 100%;
    height: 124px;
    object-fit: cover;
  }
`;
