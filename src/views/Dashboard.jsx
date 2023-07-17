import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper.jsx';
import UsersList from '../components/organisms/UsersList/UsersList';
import { useContext } from 'react';
import { UsersContext } from '../providers/UsersProvider';

const Dashboard = () => {
  const { users } = useContext(UsersContext);
  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
