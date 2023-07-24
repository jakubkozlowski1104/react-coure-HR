import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle.jsx';
import { theme } from '../assets/styles/Theme.jsx';
import { Wrapper } from './Root.styles.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate.jsx';
import AddUser from './AddUser.jsx';
import Dashboard from '../views/Dashboard.jsx';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
