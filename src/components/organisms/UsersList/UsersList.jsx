import { users } from '../../../data/data';
import UsersListItem from '../../../components/molecules/UsersListItem/UsersListItem';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

const UsersList = () => (
  <StyledWrapper>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </StyledWrapper>
);

export default UsersList;
