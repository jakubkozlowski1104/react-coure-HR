import { GlobalStyle } from '../assets/styles/GlobalStyle.jsx';
import UsersList from '../components/organisms/UsersList/UsersList.jsx';
import { theme } from '../assets/styles/Theme.jsx';
import { StyledWrapper } from './Root.styles.jsx';
import { ThemeProvider } from 'styled-components';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledWrapper>
      <UsersList />
    </StyledWrapper>
  </ThemeProvider>
);

export default Root;
