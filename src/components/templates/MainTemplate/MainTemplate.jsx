import Navigation from '../../organisms/Navigation/Navigation.jsx';
import { Wrapper } from '../MainTemplate/MainTemplate.styles.jsx';
import styled from 'styled-components';
import { Input } from '../../atoms/Input/Input.jsx';
const SearchBarWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  align-items: center;
  padding: 0 40px;

  ${Input} {
    padding: 16px 20px;
    font-size: ${({ theme }) => theme.fontSize.s};
    width: 100%;
    max-width: 450px;
    border: ${({ theme }) => theme.colors.lightPurple};
    margin-left: 30px;

    &::placeholder {
      font-size: ${({ theme }) => theme.fontSize.s};
      border: ${({ theme }) => theme.colors.lightPurple};
      opacity: 60%;
    }
  }
`;

const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  p {
    width: 90px;
  }
`;

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <Input placeholder="find student" />
    </SearchBarWrapper>
  );
};

const News = styled.div`
  grid-row: 1 /3;
  grid-column: 3/3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <News>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
        <p>Lorem, ipsum.</p>
      </News>
    </Wrapper>
  );
};

export default MainTemplate;
