import styled from "styled-components";

export const HeaderStyle = styled.nav`
  z-index: 99;
  position: fixed;
  left: 0;
  top: 0;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  padding: 32px 0px 32px 32px;
  background: rgba(255, 255, 255, 1);
  /* backdrop-filter: saturate(180%) blur(20px); */

  .logo {
    width: 111px;
    height: 24px;
    cursor: pointer;
  }

  ul {
    display: flex;
    margin: 16px 0 0 0;
    max-width: 60vw;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    /* border-top: 1px solid #eee; */

    li {
      cursor: pointer;
      /* position: absolute; */
      width: 100%;
      margin-top: 16px;
      font-size: 13px;
      color: rgb(51 51 51 / 80%);
      transition: all 0.2s ease;

      &:hover {
        color: rgb(0 0 0 / 90%);

        i {
          background: rgb(0 0 0 / 12%);
        }
      }

      i {
        padding: 1px 4px;
        font-size: 12px;
        line-height: 12px;
        border-radius: 20px;
        margin-left: 2px;
        background: hsl(0deg 0% 97%);
      }
    }
  }
`;
