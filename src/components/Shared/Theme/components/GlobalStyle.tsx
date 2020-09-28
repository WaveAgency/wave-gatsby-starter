import { css } from "linaria/lib";
import { theme } from "../Theme";

export const GlobalStyle = css`
  :global() {
    html {
      font-size: 62.5%;
      @media screen and (max-width: 600px) {
        font-size: 50%;
      }
    }

    body {
      font-size: 1.6rem;
      font-family: "Roboto", sans-serif;
      color: ${theme.color.primaryDark};
    }

    * {
      margin: 0;
    }

    a {
      text-decoration: none;
    }

    /*  Used for hiding form labels, to achieve 100% accessibility */
    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  }
`;
