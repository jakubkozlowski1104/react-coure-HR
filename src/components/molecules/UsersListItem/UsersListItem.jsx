import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../../../assets/Icons/delete-icon.svg';

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

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${({ isSecondary }) => (isSecondary ? '#e7e844' : '#c0c7d6')};
  border-radius: 50px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    stroke: red;
    width: 100px;
    height: 100%;
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
      <StyledButton isSecondary>
        <DeleteIcon />
      </StyledButton>
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
