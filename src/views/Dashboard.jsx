import { useState, useEffect } from 'react';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper.jsx';
import UsersList from '../components/organisms/UsersList/UsersList';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

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
      .get(`/students/${id}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <ViewWrapper>
      <nav>
        {groups.map((group) => (
          <NavLink key={group} to={`/group/${group}`}></NavLink>
        ))}
        <p>ELO</p>
      </nav>
      <UsersList users={students} />
    </ViewWrapper>
  );
};

export default Dashboard;
