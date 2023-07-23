import Navigation from '../../organisms/Navigation/Navigation.jsx';
import { Wrapper } from '../MainTemplate/MainTemplate.styles.jsx';
import styled from 'styled-components';
import SearchBar from '../../organisms/SearchBar/SearchBar.jsx';

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
