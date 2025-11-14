import { ThemeProvider } from 'styled-components';
import Wrapper from './components/wrapper/Wrapper';
import { defaultTheme } from './styling/theme';
import { GlobalStyles } from 'styling/global-styles';
import LanguageSelector from 'components/language-selector/LanguageSelector';
import { useState } from 'react';
import ThemeSelector from './components/theme-selector/ThemeSelector';


/**
 * App component is responsible for displaying
 * - the resume
 * - a toolbar with language selector and a download button
 * @returns {JSX.Element}
 * @constructor
 */
export default function App() {
  const [theme, setTheme] = useState(defaultTheme);

  function handleLanguageChange() {
    window.location.reload();
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LanguageSelector onChange={handleLanguageChange} />
      <ThemeSelector onChange={setTheme} />
      <Wrapper />
    </ThemeProvider>
  );
}
