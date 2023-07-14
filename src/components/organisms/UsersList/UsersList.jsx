import { users } from '../../../data/data';
import UsersListItem from '../../../components/molecules/UsersListItem/UsersListItem';
import { StyledWrapper } from './UsersList.styles';

const UsersList = () => (
  <StyledWrapper>
    <ul>
      {users.map((userData, i) => (
        <UsersListItem index={i} userData={userData} />
      ))}
    </ul>
  </StyledWrapper>
);

export default UsersList;
