import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "react-style-reset/string";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  #Smallchat {
    iframe {
      transform: scale(0.9) !important;
      transform-origin: right bottom;
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    top: 0 !important;
    background: #fff;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  #google_translate_element {
    z-index: 100;
    position: fixed;
    right: -8px;
    top: 8px;

    select {
      /* background: #333; */
      /* color: rgb(245 245 247 / 80%); */
      width: 100px;
      border-radius: 3px;
      padding: 2px 0;

      &:focus {
        outline: none !important;
      }
    }
  }

  .goog-te-banner-frame, #goog-gt-tt {
 visibility: hidden !important;
  display: none;
  height: 0;
}

.skiptranslate {
  height: 27px;
  overflow: hidden;
}

.goog-text-highlight {
  box-shadow: none;
  background-color: unset;
}

.iconTop {
  cursor: pointer;
  z-index: 99;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  right: 20px;
  bottom: 72px;
  background: white;
  box-shadow: 0px 10px 11px rgb(78 89 105 / 6%), 0px 6px 4px rgb(78 89 105 / 3%), 0px 0px 0px 1px rgb(78 89 105 / 6%), 0px 2.89797px 2.12518px rgb(78 89 105 / 3%), 0px 1.87823px 1.37737px rgb(78 89 105 / 3%), 0px 1.18233px 0.867039px rgb(78 89 105 / 3%), 0px 0.67932px 0.498168px rgb(78 89 105 / 2%), 0px 0.298986px 0.219257px rgb(78 89 105 / 1%);
  transition: all 0.2s ease-out;

  img {
    width: 16px;
    height: 16px;
    transition: all 0.2s ease-out;
  }

  &:hover {
    transform: scale(1.2);
  }
}

.onfocus {
    border-color: transparent  !important;
    box-shadow: 0 0 0 2px #2196f3 !important;
}
`;

export const AppStyle = styled.div`
  .tagActive {
    color: rgb(255 255 255 / 90%);
    font-weight: 700;
    background: black;
    box-shadow: 0 2px 3px rgb(0 0 0 / 20%);

    &:hover {
      color: rgb(255 255 255 / 90%);
      font-weight: 700;
      background: black;
      img {
        filter: invert(1);
      }
      i {
        background: rgba(0, 0, 0, 0.9);
        color: white;
      }
    }

    i {
      background: rgba(0, 0, 0, 0.9);
      color: white;
    }

    img {
      filter: invert(1);
    }

    &:hover {
      i {
        background: rgba(0, 0, 0, 0.9);
      }
    }
  }
  .thumbnailView {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)) !important;
    gap: 12px;

    &>div {
      height: unset;
    }

    a {
      padding: 0;
    }

    section {
      padding: 8%;
      display: flex;
      flex-direction: column;
    }

    .name {
      display: flex;
      align-items: center;
      margin: 0 0 12px 0;
      h3 {
        margin: 0 0 0 12px;
      }
    }
  }

  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    gap: 8px;
    padding: 0 20px 20px 20px;
    margin-top: 66px;
    /* width: calc((100vw - 180px) - 40px); */
    margin-left: 192px;

    &>div {
      height: fit-content;
    }

    a {
      display: flex;
      flex-direction: column;
      padding: 12% 12%;
      height: 100%;
      color: black;
      text-decoration: none;
      overflow: hidden;
      /* background: hsl(0deg 0% 97%); */
      border-radius: 12px;
      transition: all 0.2s ease;
      background: white;
      box-shadow: 0px 2px 2px rgb(78 89 105 / 8%),
        0px 6px 4px rgb(78 89 105 / 3%), 0px 0px 0px 1px rgb(78 89 105 / 8%),
        0px 2.89797px 2.12518px rgb(78 89 105 / 2%),
        0px 1.87823px 1.37737px rgb(78 89 105 / 2%),
        0px 1.18233px 0.867039px rgb(78 89 105 / 2%),
        0px 0.67932px 0.498168px rgb(78 89 105 / 1%),
        0px 0.298986px 0.219257px rgb(78 89 105 / 1%);

      section {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      h3 {
        font-size: 1rem;
        margin: 1rem 0 1rem 0;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.9);
      }

      p {
        font-size: 0.8rem;
        line-height: 1.45;
        margin: 0 0 0.86rem 0;
        color: rgba(0, 0, 0, 0.7);
        width: 100%;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .card-info {
        display: flex;
        flex-direction: column;
        margin-top: 4px;

        div {
          /* margin-top: 4px; */

          span:first-child {
            margin-right: 12px;
          }
        }

        span {
          opacity: 0.7;
          font-size: 0.8rem;
          display: inline-flex;
          align-items: center;

          img {
            margin-right: 2px;
          }
        }
      }

      &:hover {
        box-shadow: 0px 10px 11px rgb(78 89 105 / 0%),
          0px 6px 4px rgb(78 89 105 / 0%), 0px 0px 0px 2px #2196f3,
          0px 2.89797px 2.12518px rgb(78 89 105 / 0%),
          0px 1.87823px 1.37737px rgb(78 89 105 / 0%),
          0px 1.18233px 0.867039px rgb(78 89 105 / 0%),
          0px 0.67932px 0.498168px rgb(78 89 105 / 0%),
          0px 0.298986px 0.219257px rgb(78 89 105 / 0%);
      }
    }

    .icon {
      border-radius: 8px;
      width: 40px;
      height: 40px;
    }

    .cover {
      width: 100%;
    }
  }
`;

export const SidebarStyle = styled.nav`
  position: fixed;
  left: 0;
  top: 48px;
  height: 100vh;
  width: 168px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 1);
  overflow: scroll;
  /* border-right: 1px solid rgb(0 0 0 / 12%); */
  padding: 20px 12px 0 12px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .follow-fc {
    position: absolute;
    bottom: 80px;
    cursor: pointer;
    padding: 6px 8px;
    border-radius: 4px;
    font-size: 13px;
    color: rgb(51 51 51 / 80%);
    transition: all 0.2s ease;
    text-align: left;
    display: flex;
    align-items: center;

    img {
      margin-right: 12px;

      &:nth-of-type(2) {
        position: absolute;
        right: -18px;
        padding: 3px 4px;
        font-size: 11px;
        line-height: 11px;
        border-radius: 2px;
        margin: 0;
      }
    }

    &:hover {
      background: white;
      box-shadow: 0px 10px 11px rgb(78 89 105 / 6%),
        0px 6px 4px rgb(78 89 105 / 3%), 0px 0px 0px 1px rgb(78 89 105 / 6%),
        0px 2.89797px 2.12518px rgb(78 89 105 / 3%),
        0px 1.87823px 1.37737px rgb(78 89 105 / 3%),
        0px 1.18233px 0.867039px rgb(78 89 105 / 3%),
        0px 0.67932px 0.498168px rgb(78 89 105 / 2%),
        0px 0.298986px 0.219257px rgb(78 89 105 / 1%);

      i {
        background: none;
      }
    }

    i {
      position: absolute;
      right: 18px;
      padding: 3px 4px;
      font-size: 11px;
      line-height: 11px;
      border-radius: 2px;
    }
  }

  .input-wrap {
    display: flex;
    align-items: center;
    height: 30px;
    margin: 4px 0 12px 0;
    border-radius: 80px;
    /* overflow: hidden; */
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0 0 0 2px transparent;
    background: #fff;
    transition: all 0.2s ease;

    &::after {
      content: "/";
      padding: 2px 5px;
      border: 1px solid rgba(0, 0, 0, 0.12);
      position: absolute;
      right: 20px;
      border-radius: 3px;
      font-size: 12px;
      color: #707070;
      background: white;
    }

    &:hover {
      background: white;
      border-color: transparent;
      box-shadow: 0px 10px 11px rgb(78 89 105 / 6%),
        0px 6px 4px rgb(78 89 105 / 3%), 0px 0px 0px 1px rgb(78 89 105 / 6%),
        0px 2.89797px 2.12518px rgb(78 89 105 / 3%),
        0px 1.87823px 1.37737px rgb(78 89 105 / 3%),
        0px 1.18233px 0.867039px rgb(78 89 105 / 3%),
        0px 0.67932px 0.498168px rgb(78 89 105 / 2%),
        0px 0.298986px 0.219257px rgb(78 89 105 / 1%);
    }

    img {
      margin-right: 2px;
      margin-left: 6px;
      width: 16px;
      height: 16px;
    }
    input {
      width: calc(100% - 24px);
      height: 28px;
      outline: none;
      border: none;
      font-size: 13px;
      line-height: 13px;
      border-radius: 80px;
      background: transparent;
      transition: all 0.2s ease;

      &::placeholder {
        font-size: 13px;
        line-height: 13px;
        letter-spacing: 0.005em;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* border-top: 1px solid #eee; */

    li {
      height: 30px;
      box-sizing: border-box;
      cursor: pointer;
      padding: 6px 8px;
      border-radius: 4px;
      font-size: 13px;
      color: rgb(51 51 51 / 80%);
      transition: all 0.2s ease;
      text-align: left;
      display: flex;
      align-items: center;

      img {
        margin-right: 12px;
        width: 18px;
        height: 18px;
      }

      &:hover {
        background: white;
        box-shadow: 0px 10px 11px rgb(78 89 105 / 6%),
          0px 6px 4px rgb(78 89 105 / 3%), 0px 0px 0px 1px rgb(78 89 105 / 6%),
          0px 2.89797px 2.12518px rgb(78 89 105 / 3%),
          0px 1.87823px 1.37737px rgb(78 89 105 / 3%),
          0px 1.18233px 0.867039px rgb(78 89 105 / 3%),
          0px 0.67932px 0.498168px rgb(78 89 105 / 2%),
          0px 0.298986px 0.219257px rgb(78 89 105 / 1%);

        i {
          background: none;
        }
      }

      i {
        position: absolute;
        right: 18px;
        padding: 3px 4px;
        font-size: 11px;
        line-height: 11px;
        border-radius: 2px;
      }
    }
  }
`;

export const HeaderStyle = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: calc(100vw - 24px);
  height: 48px;
  padding: 0 16px;
  border-bottom: 1px solid rgb(0 0 0 / 12%);
  background: rgb(255 255 255 / 88%);
  backdrop-filter: saturate(180%) blur(20px);

  .logo-field {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    color: #333;
  }

  .logo {
    width: 100px;
    height: 20px;
    cursor: pointer;
    margin-right: 8px;
    margin-bottom: -2px;

    &:hover {
      opacity: 0.85;
    }
  }
`;
