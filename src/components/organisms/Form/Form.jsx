import { StyledWrapper, StyledTitle } from '../UsersList/UsersList.styles';
import FormField from '../../molecules/FormFIeld/FormFIeld';
import Button from '../../atoms/Button/Button';

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <StyledWrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
        <Button type="submit">Add user</Button>
      </StyledWrapper>
    </>
  );
};

export default Form;
