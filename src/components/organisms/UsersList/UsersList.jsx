import React from 'react';
import { users } from '../../../data/data';
import UsersListItem from '../../../components/molecules/UsersListItem/UsersListItem';
import { StyledWrapper } from './UsersList.styles';

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
      <StyledWrapper>
        <ul>
          {this.state.users.map((userData) => (
            <UsersListItem userData={userData} deleteUser={this.deleteUser} />
          ))}
        </ul>
      </StyledWrapper>
    );
  }
}

export default UsersList;
