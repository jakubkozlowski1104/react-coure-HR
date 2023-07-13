import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

const StledLi = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 1px;
    background-color: lightgray;
  }
`;

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  return (
    <StledLi>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </div>
      <Button />
    </StledLi>
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
