import { useState } from 'react';
import UsersList from '../components/organisms/UsersList/UsersList.jsx';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle.jsx';
import { theme } from '../assets/styles/Theme.jsx';
import { StyledWrapper, StyledNav } from './Root.styles.jsx';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Form from '../components/organisms/Form/Form';
import { users as usersData } from '../data/data';

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
