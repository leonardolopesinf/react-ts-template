import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', sans-serif;
        background-color: ${props => props.theme.colors.primary}
    }

    label, a, img {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    button, a {
        cursor: pointer
    }

    a {
        text-decoration: none;
        color: #4383E3;
    }
`;

export default GlobalStyle;