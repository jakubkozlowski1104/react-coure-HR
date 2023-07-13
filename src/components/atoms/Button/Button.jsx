import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../../../assets/Icons/delete-icon.svg';

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.grey};
  /* background-color: ${({ isSecondary }) => (isSecondary ? '#e7e844' : '#c0c7d6')}; */
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

const Button = () => {
  return (
    <StyledButton>
      <DeleteIcon />
    </StyledButton>
  );
};

export default Button;
