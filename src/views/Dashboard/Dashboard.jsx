import { ViewWrapper } from '../../components/molecules/ViewWrapper/ViewWrapper.jsx';
import StudentsList from '../../components/organisms/StudentsList/StudentsList.jsx';
import { Navigate, useParams } from 'react-router-dom';
import { StyledGroupsWrapper, StyledLink } from './Dashboard.styles.jsx';
import { useStudents } from '../../hooks/useStudents.jsx';
import { useState, useEffect } from 'react';
import useModal from '../../components/organisms/Modal/useModal.jsx';
import StudentDetails from '../../components/molecules/StudentDetails/StudentDetails.jsx';
import Modal from '../../components/organisms/Modal/Modal.jsx';

const mockStudent = {
  id: '1',
  name: 'Adam Romański',
  attendance: '39%',
  average: '2.3',
  group: 'A',
  grades: [
    {
      subject: 'Buisness Technology',
      average: '3.3',
    },
    {
      subject: 'Marketing',
      average: '4.7',
    },
    {
      subject: 'Human-Computer Interaction',
      average: '2.9',
    },
  ],
};

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const { getGroups, getStudentById } = useStudents();
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentById(id);
    setCurrentStudent(student);
    handleOpenModal(true);
  };

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
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
          <StudentDetails studentDetails={mockStudent} />
        </Modal>
      </ViewWrapper>
    </div>
  );
};

export default Dashboard;
