import PropTypes from 'prop-types';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper.jsx';
import UsersList from '../components/organisms/UsersList/UsersList';
import { UserShape } from '../types/index.jsx';

const Dashboard = ({ users, deleteUser }) => {
  return (
    <ViewWrapper>
      <UsersList users={users} deleteUser={deleteUser} />
    </ViewWrapper>
  );
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default Dashboard;
