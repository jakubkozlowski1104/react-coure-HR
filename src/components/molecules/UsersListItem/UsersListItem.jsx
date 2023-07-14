import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import { StyledLi, StyledAverage } from '../UsersListItem/UsersListItem.styles.jsx';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  return (
    <StyledLi>
      <StyledAverage average={average}>
        <p>{average}</p>
      </StyledAverage>
      <div className="info">
        <p className="name">{name}</p>
        <p className="attend">attendance: {attendance}</p>
      </div>
      <Button />
    </StyledLi>
  );
};

UsersListItem.PropTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    average: PropTypes.string,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
