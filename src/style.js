import styled from "styled-components";

export const AppStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  a {
    display: flex;
    flex-direction: column;
    padding: 15% 15%;
    color: black;
    text-decoration: none;
    box-shadow: 0 0 0 0.5px #eee;

    h3 {
      font-size: 1rem;
      margin: 2.3rem 0 1rem 0;
      font-weight: 700;
    }

    p {
      font-size: 0.8rem;
      line-height: 1.45;
      margin: 0 0 1rem 0;
    }

    span {
      opacity: 0.7;
      font-size: 0.8rem;

      &:nth-of-type(2) {
        margin-top: 4px;
        font-size: 0.6rem;
      }
    }

    &:hover {
      background: rgba(0, 0, 0, 0.03);
    }
  }

  img {
    border-radius: 8px;
    width: 40px;
  }
`;
