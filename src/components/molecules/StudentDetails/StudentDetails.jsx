import { StyledAverage } from '../UsersListItem/UsersListItem.styles';
import styled from 'styled-components';

const StyledStudentDetails = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  color: ${({ theme }) => theme.colors.darkGrey};
  
  .averageGrade {
    position: absolute;
    top: 3%;
    left: 3%;
  }
  
  header {
    flex-basis: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
  
  .info {
    padding: 20px;
    margin-left: 40px;
    .course {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      padding: 10px;
      gap: 3px;
      h3 {
        font-size: ${({ theme }) => theme.fontSize.l};
      }
      p {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
    }
    
    .grades {
      height: 300px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      padding: 10px;
      gap: 7px;
      padding-top: 20px;
      h3 {
        margin: 0;
        padding: 0;
      }
      
      .grade {
        display: flex;
        align-items: center;
        gap: 20px;
        
        ${StyledAverage} {
          color: ${({ theme }) => theme.colors.white};
          font-weight: bold;
        }
      }
    }
  }
  `;

const StudentDetails = ({
  studentDetails: {
    name,
    average,
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
      <div className="info">
        <div className="course">
          <h3>Course:</h3>
          <p>Buisness Philosophy</p>
        </div>
        <div className="grades">
          <h3>Average grades:</h3>
          <div className="grade">
            <p>{subject1}</p>
            <StyledAverage average={averageSub1}>{averageSub1}</StyledAverage>
          </div>
          <div className="grade">
            <p>{subject2}</p>
            <StyledAverage average={averageSub2}>{averageSub2}</StyledAverage>
          </div>
          <div className="grade">
            <p>{subject3}</p>
            <StyledAverage average={averageSub3}>{averageSub3}</StyledAverage>
          </div>
        </div>
      </div>
    </StyledStudentDetails>
  );
};

export default StudentDetails;
