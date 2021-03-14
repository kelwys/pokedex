import styled from 'styled-components';

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
