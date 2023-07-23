import Navigation from '../../organisms/Navigation/Navigation.jsx';
import { Wrapper } from '../MainTemplate/MainTemplate.styles.jsx';
import styled from 'styled-components';
import SearchBar from '../../organisms/SearchBar/SearchBar.jsx';
import NewsSection from '../NewsSection/NewsSection.jsx';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;
