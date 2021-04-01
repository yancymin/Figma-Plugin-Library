import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "react-style-reset/string";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    top: 0 !important;
    background: #fff;
  }

  #google_translate_element {
    z-index: 100;
    position: fixed;
    right: 20px;
    top: 10px;

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
`;

export const AppStyle = styled.div`
  .tagActive {
    background: #333;
    color: white;

    &:hover {
      color: white;
    }
  }
  .thumbnailView {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)) !important;

    a {
      padding: 0;
    }

    section {
      padding: 5%;
      display: flex;
      flex-direction: column;
    }

    .name {
      display: flex;
      align-items: center;
      margin: 0 0 8px 0;
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
    gap: 2px;
    padding: 80px;
    margin-top: 28px;

    a {
      display: flex;
      flex-direction: column;
      padding: 15% 15%;
      color: black;
      text-decoration: none;
      overflow: hidden;
      background: hsl(0deg 0% 97%);

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
        margin: 0 0 0.8rem 0;
        color: rgba(0, 0, 0, 0.7);
      }

      .card-info {
        display: flex;
        flex-direction: column;

        i {
          font-weight: 600;
        }
      }

      span {
        opacity: 0.7;
        font-size: 0.8rem;

        &:nth-of-type(2) {
          margin-top: 6px;
          font-size: 0.6rem;
        }
      }

      &:hover {
        background: hsl(0deg 0% 94%);
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
