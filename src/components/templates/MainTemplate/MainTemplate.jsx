import Navigation from '../../organisms/Navigation/Navigation.jsx';
import { Wrapper } from '../MainTemplate/MainTemplate.styles.jsx';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
