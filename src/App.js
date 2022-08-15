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
  const [counter, setCounter] = useState();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LanguageSelector onChange={() => setCounter(counter + 1)} />
      <Wrapper />
    </ThemeProvider>
  );
}
