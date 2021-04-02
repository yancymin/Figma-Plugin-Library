import styled from "styled-components";

export const HeaderStyle = styled.nav`
  z-index: 99;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 2rem;
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
    /* border-top: 1px solid #eee; */

    li {
      cursor: pointer;
      margin-right: 16px;
      margin-top: 12px;
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
        padding: 2px 4px;
        font-size: 12px;
        line-height: 12px;
        border-radius: 20px;
        margin-left: 2px;
        background: hsl(0deg 0% 97%);
      }
    }
  }
`;
