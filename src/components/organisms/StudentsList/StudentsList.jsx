import { useParams } from 'react-router-dom';
import { useStudents } from '../../../hooks/useStudents';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { StyledWrapper } from './StudentsList.styles';
import { useState, useEffect } from 'react';

const StudentsList = ({ handleOpenStudentDetails }) => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudents: getStudentsByGroup } = useStudents();

  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(id);
      setStudents(students);
    })();
  }, [getStudentsByGroup, id]);

  return (
    <>
      <StyledWrapper>
        <ul>
          {students.map((studentData) => (
            <UsersListItem handleOpenStudentDetails={handleOpenStudentDetails} key={studentData.name} userData={studentData} />
          ))}
        </ul>
      </StyledWrapper>
    </>
  );
};

export default StudentsList;
