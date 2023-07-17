import { StyledWrapper, StyledTitle } from '../components/organisms/UsersList/UsersList.styles';
import PropTypes from 'prop-types';
import { UserShape } from '../types/index';
import FormField from '../components/molecules/FormFIeld/FormFIeld';
import Button from '../components/atoms/Button/Button';
import { ViewWrapper } from '../components/molecules/ViewWrapper/ViewWrapper';

const AddUser = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <ViewWrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
        <Button type="submit">Add user</Button>
      </ViewWrapper>
    </>
  );
};

AddUser.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  formValues: PropTypes.shape(UserShape),
  handleInputChange: PropTypes.func.isRequired,
};

export default AddUser;
