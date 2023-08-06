import { StyledAverage } from '../UsersListItem/UsersListItem.styles';
import { TitleWrapper } from '../../../components/templates/NewsSection/NewsSection.styles.jsx';

const StudentDetails = ({ studentDetails }) => {
  return (
    <div>
      {console.log(studentDetails)}
      <TitleWrapper>
        {studentDetails.name} | Group {studentDetails.group}
      </TitleWrapper>
      <p>{studentDetails.attendance}</p>
      <StyledAverage average={studentDetails.average}>{studentDetails.average}</StyledAverage>
    </div>
  );
};

export default StudentDetails;
