import { createGlobalStyle } from 'styled-components';

// font-family: 'Noto Serif', serif; 400/700
// font-family: 'Roboto Serif', serif; 400/600

export const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Serif', serif;
  }
  
  * {
    box-sizing: border-box;
  }
  
  #root {
    display: flex;
    margin: 1rem auto;
    width: ${({ theme }) => theme.A4PageWidth};
    height: ${({ theme }) => theme.A4PageHeight};
    background: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.25);
  }
  
  @page {
    size: A4;
    margin: 0;
  }

  @media print {
    html, body {
      width: ${({ theme }) => theme.A4PageWidth};
      min-height: ${({ theme }) => theme.A4PageHeight};
    }
    
    #root {
      margin: 0;
      border: initial;
      border-radius: initial;
      width: initial;
      min-height: initial;
      box-shadow: initial;
      background: initial;
      page-break-after: always;
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;
