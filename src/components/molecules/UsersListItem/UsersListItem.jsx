import PropTypes from 'prop-types';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { StyledLi, StyledAverage } from '../UsersListItem/UsersListItem.styles.jsx';

const UsersListItem = ({ deleteUser, userData: { name, average, attendance = '0%' } }) => {
  return (
    <StyledLi>
      <StyledAverage average={average}>
        <p>{average}</p>
      </StyledAverage>
      <div className="info">
        <p className="name">{name}</p>
        <p className="attend">attendance: {attendance}</p>
      </div>
      <DeleteButton onClick={() => deleteUser(name)} />
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
