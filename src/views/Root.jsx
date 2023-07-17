import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle.jsx';
import { theme } from '../assets/styles/Theme.jsx';
import { Wrapper } from './Root.styles.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { users as usersData } from '../data/data';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate.jsx';
import AddUser from './AddUser.jsx';
import Dashboard from '../views/Dashboard.jsx';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const Root = () => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (formValues) => {
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([newUser, ...users]);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersContext.Provider
            value={{
              users,
              handleAddUser,
              deleteUser,
            }}
          >
            <Wrapper>
              <Routes>
                <Route path="/add-user" element={<AddUser />} />
                <Route path="/" element={<Dashboard deleteUser={deleteUser} users={users} />} />
              </Routes>
            </Wrapper>
          </UsersContext.Provider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
