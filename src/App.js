import { ThemeProvider } from 'styled-components';
import Wrapper from './components/wrapper/Wrapper';
import theme from './styling/theme';
import { GlobalStyles } from 'styling/global-styles';
import LanguageSelector from 'components/language-selector/LanguageSelector';
import { useState } from 'react';


/**
 * App component is responsible for displaying
 * - the resume
 * - a toolbar with language selector and a download button
 * @returns {JSX.Element}
 * @constructor
 */
export default function App() {
  function handleLanguageChange() {
    window.location.reload();
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LanguageSelector onChange={handleLanguageChange} />
      <Wrapper />
    </ThemeProvider>
  );
}
