import { ReactComponent as DeleteIcon } from '../../../assets/Icons/delete-icon.svg';
import { StyledButton } from './Button.styles';

const Button = (props) => {
  return (
    <StyledButton {...props}>
      <DeleteIcon />
    </StyledButton>
  );
};

export default Button;
