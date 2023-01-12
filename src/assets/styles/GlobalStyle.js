import { createGlobalStyle, css } from 'styled-components';

export const lighten = (value) => css`
  filter: brightness(${value + 1});
`;

export const darken = (value) => css`
  filter: brightness(${1 - value});
`;

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    font-family: 'Montserrat', sans-serif;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    overflow: auto;

    @media (min-width: 768px) {
      overflow: hidden;
    }
    
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
