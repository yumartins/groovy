import { colors, typograph } from 'groovy-styles';
import styled, { css } from 'styled-components';

import { P2 } from '../Title';

const {
  grays,
  white,
  error: errors,
} = colors;

const {
  size,
  weight,
} = typograph;

export const Label = styled(P2)`
  color: ${grays._200};
  position: absolute;
  left: 24px;
  top: 20px;
  cursor: text;
  transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const Target = styled.input`
  border: 1px solid ${grays._300};
  padding: 16px 24px;
  width: 100%;
  border-radius: 8px;
  height: 100%;
  color: ${white};
  font-size: ${size.s2}px;
  font-weight: ${weight.bold};
  background-color: transparent;
  transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const Icon = styled.span`
  position: absolute;
  top: 18px;
  left: 24px;
  color: ${grays._100};

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  background-color: ${grays._500};
  display: flex;
  align-items: center;

  ${({ hasIcon }) => hasIcon && css`
    ${Label} {
      left: 64px;
    }

    ${Target} {
      padding: 16px 24px 16px 64px;
    }
  `}

  ${({ focus, hasIcon }) => focus && css`
    ${Label} {
      top: 8px;
      font-size: ${size.s1}px;
      font-weight: ${weight.semiBold};
    }

    ${Target} {
      padding: ${hasIcon ? '24px 24px 8px 64px' : '24px 24px 8px 24px'};
    }
  `}
`;

export const View = styled.div`
  width: 100%;

  ${({ error }) => error && css`
    margin-bottom: 24px;

    ${Label} {
      color: ${errors};
    }

    ${Target} {
      border-color: ${errors};
    }
  `}
`;

export const Error = styled.span`
  margin-top: 4px;
  float: right;
  text-align: right;
  font-size: ${size.s1}px;
  color: ${errors};
`;
