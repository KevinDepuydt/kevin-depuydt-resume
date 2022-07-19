import { ThemeProvider } from 'styled-components';
import Wrapper from './components/wrapper/Wrapper';
import theme from './styling/theme';
import { GlobalStyles } from 'styling/global-styles';


/**
 * App component is responsible for displaying
 * - the resume
 * - a toolbar with language selector and a download button
 * @returns {JSX.Element}
 * @constructor
 */
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper />
    </ThemeProvider>
  );
}
