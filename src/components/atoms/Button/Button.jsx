import { ReactComponent as DeleteIcon } from '../../../assets/Icons/delete-icon.svg';
import { StyledButton } from './Button.styles';

const Button = () => {
  return (
    <StyledButton>
      <DeleteIcon />
    </StyledButton>
  );
};

export default Button;
