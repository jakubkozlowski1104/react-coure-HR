import UsersListItem from '../../../components/molecules/UsersListItem/UsersListItem';
import { StyledWrapper, StyledTitle } from './UsersList.styles';
import FormField from '../../molecules/FormFIeld/FormFIeld';
import Button from '../../atoms/Button/Button';
import { useState } from 'react';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
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
