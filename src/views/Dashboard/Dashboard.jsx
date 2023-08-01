import { useState, useEffect } from 'react';
import { ViewWrapper } from '../../components/molecules/ViewWrapper/ViewWrapper.jsx';
import UsersList from '../../components/organisms/UsersList/UsersList.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { StyledGroupsWrapper, StyledLink } from './Dashboard.styles.jsx';

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
    <div>
      <StyledGroupsWrapper>
        <p>Group {id || 'A'}</p>
        {groups.map((group) => (
          <StyledLink key={group} to={`/group/${group}`}>
            {group}
          </StyledLink>
        ))}
      </StyledGroupsWrapper>
      <ViewWrapper>
        <UsersList users={students} />
      </ViewWrapper>
    </div>
  );
};

export default Dashboard;
