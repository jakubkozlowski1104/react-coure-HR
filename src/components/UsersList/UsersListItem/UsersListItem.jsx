import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  return (
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </div>
      <button>X</button>
    </li>
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
