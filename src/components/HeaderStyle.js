import styled from "styled-components";

export const HeaderStyle = styled.nav`
  z-index: 99;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  padding: 12px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: saturate(180%) blur(20px);

  ul {
    display: flex;
    li {
      cursor: pointer;
      margin: 8px 16px;
      font-size: 14px;
      color: #f5f5f7;
      opacity: 0.8;
    }
  }
`;
