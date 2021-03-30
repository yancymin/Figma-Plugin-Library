import styled from "styled-components";

export const HeaderStyle = styled.nav`
  z-index: 99;
  /* position: fixed; */
  left: 0;
  top: 0;
  width: 100vw;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: rgba(0, 0, 0, 0.8); */
  /* backdrop-filter: saturate(180%) blur(20px); */

  ul {
    display: flex;
    margin: 16px 0;
    max-width: 60vw;
    flex-wrap: wrap;
    justify-content: center;

    li {
      cursor: pointer;
      margin: 4px;
      font-size: 14px;
      color: rgb(51 51 51 / 80%);
      border: 1px solid rgb(51 51 51 / 20%);
      padding: 6px 10px;
      border-radius: 40px;
      transition: all 0.2s ease;

      &:hover {
        border: 1px solid rgb(51 51 51 / 60%);
        color: rgb(51 51 51 / 100%);
      }
    }
  }
`;
