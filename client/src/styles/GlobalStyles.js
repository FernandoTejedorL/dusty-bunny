import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';
import { FONT_FAMILY } from './fonts';
import './normalize.css';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body{
        font-family: ${FONT_FAMILY.grandstander};
        margin: 0;
        color: ${COLORS.dark};
        
        &.overflow{
            overflow: hidden;
        }
    }

    #root{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    } 

`;
