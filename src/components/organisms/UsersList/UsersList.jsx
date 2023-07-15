import React from 'react';
import { users } from '../../../data/data';
import UsersListItem from '../../../components/molecules/UsersListItem/UsersListItem';
import { StyledWrapper, StyledTitle } from './UsersList.styles';
import FormField from '../../molecules/FormFIeld/FormFIeld';
import Button from '../../atoms/DeleteButton/DeleteButton';

class UsersList extends React.Component {
  state = {
    users: users,
  };

  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => user.name !== name);
    this.setState({ users: filteredUsers });
  };

  render() {
    return (
      <>
        <StyledWrapper>
          <StyledTitle>Add new student</StyledTitle>
          <FormField label="Name" id="name" name="name" />
          <FormField label="Attendance" id="name" name="name" />
          <FormField label="Average" id="name" name="name" />
          <Button>Add user</Button>
        </StyledWrapper>
        <StyledWrapper>
          <ul>
            {this.state.users.map((userData) => (
              <UsersListItem userData={userData} deleteUser={this.deleteUser} />
            ))}
          </ul>
        </StyledWrapper>
      </>
    );
  }
}

export default UsersList;
