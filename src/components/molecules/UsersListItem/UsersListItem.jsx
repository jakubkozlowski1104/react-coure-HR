import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import { StyledLi } from '../UsersListItem/UsersListItem.styles.jsx';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  return (
    <StyledLi>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
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
