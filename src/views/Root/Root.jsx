import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../assets/styles/GlobalStyle.jsx';
import { theme } from '../../assets/styles/Theme.jsx';
import { Wrapper } from './Root.styles.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate.jsx';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Modal from '../../components/organisms/Modal/Modal.jsx';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Modal />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Navigate to="/group" />} />
              <Route path="/group/" element={<Dashboard />}>
                <Route path=":id" element={<Dashboard />} />
              </Route>
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
