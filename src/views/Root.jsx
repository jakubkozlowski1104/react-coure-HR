import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle.jsx';
import { theme } from '../assets/styles/Theme.jsx';
import { Wrapper } from './Root.styles.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { users as usersData } from '../data/data';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate.jsx';
import AddUser from './AddUser.jsx';
import Dashboard from '../views/Dashboard.jsx';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

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
    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route
                path="/add-user"
                element={<AddUser formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />}
              />
              <Route path="/" element={<Dashboard deleteUser={deleteUser} users={users} />} />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
