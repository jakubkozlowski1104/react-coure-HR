import { useParams } from 'react-router-dom';
import { useStudents } from '../../../hooks/useStudents';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { StyledWrapper } from './StudentsList.styles';

const StudentsList = () => {
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });

  return (
    <>
      <StyledWrapper>
        <ul>
          {students.map((studentData) => (
            <UsersListItem key={studentData.name} userData={studentData} />
          ))}
        </ul>
      </StyledWrapper>
    </>
  );
};

export default StudentsList;
