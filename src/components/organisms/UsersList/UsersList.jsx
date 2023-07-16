import UsersListItem from '../../../components/molecules/UsersListItem/UsersListItem';
import { StyledWrapper } from './UsersList.styles';

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
