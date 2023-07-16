import { useState } from 'react';
import UsersList from '../components/organisms/UsersList/UsersList.jsx';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle.jsx';
import { theme } from '../assets/styles/Theme.jsx';
import { StyledWrapper } from './Root.styles.jsx';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Form from '../components/organisms/Form/Form';
import { users as usersData } from '../data/data';
import styled from 'styled-components';

const initalFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initalFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initalFormState);
  };

  const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: flex-end;
    gap: 10px;
    top: 0;
    left: 0;
    padding: 20px 50px 0 20px;
    background-color: #f7f8fa;
    height: 100vh;
    position: absolute;
    transition: 1s;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 2px;
      height: 100vh;
      background-color: #dfe2e8;
    }

    * {
      position: relative;
      font-size: ${({ theme }) => theme.fontSize.l};
      color: #737c8e;
      text-decoration: none;
      font-weight: bold;
    }

    *:hover::before {
      content: '';
      position: absolute;
      top: 48%;
      right: -47px;
      width: 40px;
      height: 3px;
      background-color: #e0e2e6;
    }

    *.active::before {
      content: '';
      position: absolute;
      top: 48%;
      right: -47px;
      width: 40px;
      height: 3px;
      background-color: #b9bbbe;
    }
  `;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledWrapper>
          <StyledNav>
            <NavLink className="home" to="/">
              Home
            </NavLink>
            <NavLink className="addUser" to="/add-user">
              Add user
            </NavLink>
            <NavLink className="register" to="/register">
              Register
            </NavLink>
          </StyledNav>
          <Routes>
            <Route path="/" element={<UsersList deleteUser={deleteUser} users={users} />} />
            <Route path="/add-user" element={<Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />} />
          </Routes>
        </StyledWrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
