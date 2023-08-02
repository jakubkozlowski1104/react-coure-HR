import { SearchBarWrapper, StyledListWrapper, StatusInfo, StyledList } from './SearchBar.styles';
import { Input } from '../../atoms/Input/Input';
import { useState } from 'react';
import { useStudents } from '../../../hooks/useStudents';

const SearchBar = () => {
  const [searchOptions, setSearchOptions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isListVisible, setListVisible] = useState(false);
  const { allStudents } = useStudents();

  const handleSearchStudents = (e) => {
    setSearchQuery(e.target.value);
    const filteredStudents = allStudents.filter((student) => student.toLowerCase().includes(searchQuery.toLowerCase()));
    setSearchOptions(filteredStudents);
  };

  const handleInputFocus = () => {
    setListVisible(true);
  };

  const handleInputBlur = () => {
    setListVisible(false);
  };

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <StyledListWrapper>
        <Input placeholder="find student" onChange={handleSearchStudents} onFocus={handleInputFocus} onBlur={handleInputBlur}></Input>
        <StyledList isListVisible={isListVisible}>
          {searchOptions.map((student) => (
            <li>{student}</li>
          ))}
        </StyledList>
      </StyledListWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
