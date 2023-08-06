import { StyledAverage } from '../UsersListItem/UsersListItem.styles';
import { TitleWrapper } from '../../../components/templates/NewsSection/NewsSection.styles.jsx';
import styled from 'styled-components';

const StyledStudentDetails = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  background-color: lightblue;
  width: 100%;
  height: 500px;
  color: ${({ theme }) => theme.colors.darkGrey};

  .averageGrade {
    position: absolute;
    top: 6%;
    left: 6%;
  }
  
  header {
    display: flex;
    flex-basis: 20%;
    justify-content: space-around;
    align-items: center;
  }
  
  .course {
    background-color: red;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 10px;
    gap: 3px;
    
    p {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
  `;

const StudentDetails = ({
  studentDetails: {
    id,
    name,
    average,
    attendance = '0%',
    grades: [
      { subject: subject1, averageSub: averageSub1 },
      { subject: subject2, averageSub: averageSub2 },
      { subject: subject3, averageSub: averageSub3 },
    ],
  },
}) => {
  return (
    <StyledStudentDetails>
      <div className="averageGrade">
        <StyledAverage $isBig={true} average={average}>
          <p>{average}</p>
        </StyledAverage>
      </div>
      <header>
        <h1>{name}</h1>
      </header>
      <div className="course">
        <h3>Course:</h3>
        <p>Buisness Philosophy</p>
      </div>
      <div>
        <h3>Average grades:</h3>
        <div className="grades">
          <p>Buisness Philosophy</p>
          <StyledAverage average={average}>{average}</StyledAverage>
        </div>
        <div className="grades">
          <p>Buisness Philosophy</p>
          <StyledAverage average={average}>{average}</StyledAverage>
        </div>
        <div className="grades">
          <p>Buisness Philosophy</p>
          <StyledAverage average={average}>{average}</StyledAverage>
        </div>
      </div>
    </StyledStudentDetails>
  );
};

export default StudentDetails;
