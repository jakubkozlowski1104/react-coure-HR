import { SearchBarWrapper } from './SearchBar.styles';
import { StatusInfo } from './SearchBar.styles';
import { Input } from '../../atoms/Input/Input';

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <Input placeholder="find student" />
    </SearchBarWrapper>
  );
};

export default SearchBar;
