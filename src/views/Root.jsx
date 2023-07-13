import { GlobalStyle } from '../assets/styles/GlobalStyle.jsx';
import UsersList from '../components/organisms/UsersList/UsersList.jsx';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/Theme.jsx';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledWrapper>
      <UsersList />
    </StyledWrapper>
  </ThemeProvider>
);

export default Root;
