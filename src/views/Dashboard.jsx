import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper.jsx';
import UsersList from '../components/organisms/UsersList/UsersList';
import { useContext } from 'react';
import { UsersContext } from './Root.jsx';

const Dashboard = () => {
  const { users } = useContext(UsersContext);
  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
