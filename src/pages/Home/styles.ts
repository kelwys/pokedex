import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
font-size: 48px;
color: #3A3A3A;
max-width: 450px;
line-height: 56px;

margin-top: 80px;
`;

export const Form = styled.form`
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

export const Grid = styled.div`
  margin-top: 50px;
  max-width: 700px;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .content {
    height: 140px;

    background: #FFF;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
    display: block;
    text-decoration: none;
    text-align: center;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(2px)
    }

    strong {
        color: #3d3d4d;
      }
  }
`;
