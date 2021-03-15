import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #121214;
    transition: color 0.2s;
    &:hover {
      color: #666;
    }
    svg {
      margin-right: 4px;
    }
  }
`;

export const PokemonInfo = styled.section`
  background-color: rgba(255,255,255,0.7);
  border-radius: 5px;
  padding: 10px;
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: #3d3d4d;
        display: block;
      }
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
        margin-bottom: 10px;
      }
      span {
        color: #315AE5;
        margin-right: 10px;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    padding-left: 10px;
    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 25px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;
