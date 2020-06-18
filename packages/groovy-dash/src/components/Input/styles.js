import { colors, typograph } from 'groovy-styles';
import styled, { css } from 'styled-components';

const {
  size,
  weight,
} = typograph;

export const Label = styled.label`
  font-size: ${size.s3};
  color: ${({ theme }) => theme.input.label};
  font-weight: ${weight.semiBold};
  position: absolute;
  left: 24px;
  top: 18px;
  cursor: text;
  transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const Target = styled.input`
  border: 1px solid ${({ theme }) => theme.input.border};
  padding: 16px 24px;
  width: 100%;
  border-radius: 4px;
  height: 100%;
  color: ${({ theme }) => theme.input.title};
  font-size: ${size.s3};
  font-weight: ${weight.semiBold};
  background-color: transparent;
  transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const Wrapper = styled.div``;

export const View = styled.div`
  position: relative;
  width: 100%;
  height: 56px;

  ${({ focus }) => focus && css`
    ${Label} {
      top: 8px;
      font-size: ${size.s1};
      font-weight: ${weight.regular};
    }

    ${Target} {
      padding: 24px 24px 8px 24px;
    }
  `}

  ${({ error }) => error && css`
    margin-bottom: 24px;

    ${Label} {
      color: ${colors.error};
    }

    ${Target} {
      border-color: ${colors.error};
    }
  `}
`;

export const Error = styled.span`
  margin-top: 4px;
  float: right;
  text-align: right;
  font-size: ${size.s1};
  color: ${colors.error};
`;
