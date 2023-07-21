/* eslint-disable no-undef */
import FormField from '../FormFIeld/FormFIeld';
import { renderWithProviders } from '../../../helpers/renderWithThemeProvider';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
