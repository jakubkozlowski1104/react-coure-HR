import UsersListItem from '../../../components/molecules/UsersListItem/UsersListItem';
import { StyledWrapper } from './UsersList.styles';

const UsersList = ({ users }) => {
  return (
    <>
      <StyledWrapper>
        <ul>
          {users.map((userData) => (
            <UsersListItem key={userData.name} userData={userData} />
          ))}
        </ul>
      </StyledWrapper>
    </>
  );
};

export default UsersList;
