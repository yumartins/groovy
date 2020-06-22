import { colors, typograph } from 'groovy-styles';
import styled from 'styled-components';

const {
  white,
  grays,
} = colors;

const {
  size,
  align,
  weight,
} = typograph;

const Title = {
  textTransform: ({ uppercase }) => (uppercase ? 'uppercase' : 'inherit'),
  textAlign: ({ center }) => (center ? align.center : align.left),
};

export const H1 = styled.h1`
  font-size: ${size.l3}px;
  line-height: 80px;
  font-weight: ${weight.extraBold};
  color: ${white};
  ${{ ...Title }}
`;

export const H2 = styled.h2`
  font-size: ${size.l1}px;
  line-height: 48px;
  font-weight: ${weight.bold};
  color: ${white};
  ${{ ...Title }}
`;

export const H4 = styled.h4`
  font-size: ${size.m2}px;
  line-height: 32px;
  font-weight: ${weight.bold};
  color: ${white};
  ${{ ...Title }}
`;

export const H5 = styled.h5`
  font-size: ${size.s3}px;
  line-height: 24px;
  font-weight: ${weight.extraBold};
  color: ${grays._300};
  ${{ ...Title }}
`;

export const H6 = styled.h6`
  font-size: ${size.s1}px;
  line-height: 16px;
  font-weight: ${weight.extraBold};
  color: ${grays._300};
  letter-spacing: 1px;
  ${{ ...Title }}
`;

export const P2 = styled.p`
  font-size: ${size.s2}px;
  line-height: 16px;
  font-weight: ${weight.bold};
  color: ${grays._100};
  ${{ ...Title }}
`;
