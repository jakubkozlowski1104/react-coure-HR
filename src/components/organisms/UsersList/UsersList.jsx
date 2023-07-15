import { users as usersData } from '../../../data/data';
import UsersListItem from '../../../components/molecules/UsersListItem/UsersListItem';
import { StyledWrapper, StyledTitle } from './UsersList.styles';
import FormField from '../../molecules/FormFIeld/FormFIeld';
import Button from '../../atoms/Button/Button';
import { useState } from 'react';

const initalFormState = {
  name: '',
  attendance: '',
  average: '',
};

const UsersList = () => {
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
    <>
      <StyledWrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
        <Button type="submit">Add user</Button>
      </StyledWrapper>
      <StyledWrapper>
        <ul>
          {users.map((userData) => (
            <UsersListItem userData={userData} deleteUser={deleteUser} />
          ))}
        </ul>
      </StyledWrapper>
    </>
  );
};

export default UsersList;
