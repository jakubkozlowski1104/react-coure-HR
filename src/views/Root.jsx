import { GlobalStyle } from '../assets/styles/GlobalStyle.jsx';
import UsersList from '../components/organisms/UsersList/UsersList.jsx';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => (
  <>
    <GlobalStyle />
    <StyledWrapper>
      <UsersList />
    </StyledWrapper>
  </>
);

export default Root;
