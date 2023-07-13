import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import AverageItem from '../../atoms/AverageItem/AverageItem';
import { StyledLi } from '../UsersListItem/UsersListItem.styles.jsx';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  return (
    <StyledLi>
      <AverageItem average={average} />
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
