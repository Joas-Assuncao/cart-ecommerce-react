import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        text-decoration: none;
        list-style: none;

        font-family: 'Roboto', sans-serif;

        border: none;

        box-sizing: border-box;
    }

    html,
    body {
        position: relative;
        height: 100%;
    }

    body {
        background: ${colors.whiteBody};
        font-size: 14px;
        color: #000;
        margin: 0;
        padding: 0;
    }

    #root { height: 100% }

    button {
        cursor: pointer;
    }

    @media(max-width: 480px) {
        html {
            font-size: 87.5%;
        }
    }
`;