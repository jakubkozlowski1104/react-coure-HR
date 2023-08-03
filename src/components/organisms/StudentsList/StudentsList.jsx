import { useParams } from 'react-router-dom';
import { useStudents } from '../../../hooks/useStudents';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { StyledWrapper } from './StudentsList.styles';
import { useState, useEffect } from 'react';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudents } = useStudents();

  useEffect(() => {
    (async () => {
      const students = await getStudents(id);
      setStudents(students);
    })();
  }, [getStudents, id]);

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
