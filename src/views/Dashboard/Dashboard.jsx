import { ViewWrapper } from '../../components/molecules/ViewWrapper/ViewWrapper.jsx';
import StudentsList from '../../components/organisms/StudentsList/StudentsList.jsx';
import { Navigate, useParams } from 'react-router-dom';
import { StyledGroupsWrapper, StyledLink } from './Dashboard.styles.jsx';
import { useStudents } from '../../hooks/useStudents.jsx';

const Dashboard = () => {
  const { groups } = useStudents();
  const { id } = useParams();

  if (!id && groups.length > 0) return <Navigate to={`/group/${groups[0]}`} />;

  return (
    <div>
      <StyledGroupsWrapper>
        <p>Group {id}</p>
        {groups.map((group) => (
          <StyledLink key={group} to={`/group/${group}`}>
            {group}
          </StyledLink>
        ))}
      </StyledGroupsWrapper>
      <ViewWrapper>
        <StudentsList />
      </ViewWrapper>
    </div>
  );
};

export default Dashboard;
