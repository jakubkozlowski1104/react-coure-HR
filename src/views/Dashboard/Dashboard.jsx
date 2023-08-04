import { ViewWrapper } from '../../components/molecules/ViewWrapper/ViewWrapper.jsx';
import StudentsList from '../../components/organisms/StudentsList/StudentsList.jsx';
import { Navigate, useParams } from 'react-router-dom';
import { StyledGroupsWrapper, StyledLink } from './Dashboard.styles.jsx';
import { useStudents } from '../../hooks/useStudents.jsx';
import { useState, useEffect } from 'react';
import useModal from '../../components/organisms/Modal/useModal.jsx';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const { getGroups } = useStudents();
  const { id } = useParams();
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = (id) => {
    setCurrentStudent(id);
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
        {isOpen ? <Modal handleCloseModal={handleCloseModal}>{currentStudent}</Modal> : null}
      </ViewWrapper>
    </div>
  );
};

export default Dashboard;
