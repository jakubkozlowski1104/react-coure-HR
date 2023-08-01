import { useState, useEffect } from 'react';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper.jsx';
import UsersList from '../components/organisms/UsersList/UsersList';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [id, groups]);

  return (
    <ViewWrapper>
      <nav>
        {groups.map((group) => (
          <NavLink key={group} to={`/group/${group}`}>
            {group}{' '}
          </NavLink>
        ))}
      </nav>
      <UsersList users={students} />
    </ViewWrapper>
  );
};

export default Dashboard;
