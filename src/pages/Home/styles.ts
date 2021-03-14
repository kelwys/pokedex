import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
font-size: 48px;
color: #3A3A3A;
max-width: 450px;
line-height: 56px;

margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
margin-top: 40px;
max-width: 700px;

display: flex;

input {
  flex: 1;
  height: 60px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;
  border: 2px solid #fff;
  border-right: 0;

  ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

  &::placeholder {
    color: #a8a8b3;
  }
}

button {
  width: 210px;
  height: 60px;
  background: #ee6b2f;
  border-radius: 0px 5px 5px 0px;
  border: 0;
  color: #FFF;
  font-weight: bold;
  transition: background-color 0.2;

  &:hover {
    background: ${shade(0.2, '#ee6b2f')};
  }
}
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
  font-size: 12px;
`;

