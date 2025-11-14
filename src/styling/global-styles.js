import { createGlobalStyle } from 'styled-components';
import { RESUME_CONTAINER_ID } from 'components/wrapper/Wrapper.styled';

// font-family: 'Noto Serif', serif; 400/700
// font-family: 'Roboto Serif', serif; 400/600

export const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 1rem;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
  }
  
  * {
    box-sizing: border-box;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    
    button {
      margin-bottom: 2rem;
    }
  }
  
  @page {
    size: A4;
    margin: 0;
  }

  @media print {
    html, body {
      padding: 0;
      margin: 0;
    }

    #root {
      margin: 0;
      padding: 0;
      border: initial;
      border-radius: initial;
      width: ${({ theme }) => theme.A4PageWidth};
      min-height: ${({ theme }) => theme.A4PageHeight};
      box-shadow: initial;
      background: initial;

      #${RESUME_CONTAINER_ID} {
        box-shadow: none;
      }
      
      #language-selector {
        display: none;
      }
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 900;
  }
`;
