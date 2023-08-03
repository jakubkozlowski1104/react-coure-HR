import { SearchBarWrapper, SearchResultItem, SearchResults, SearchWrapper, StatusInfo } from './SearchBar.styles';
import { Input } from '../../atoms/Input/Input';
import { useState, useEffect } from 'react';
import { useStudents } from '../../../hooks/useStudents';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';

export const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const { isOpen, getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, highlightedIndex, getItemProps, selectedItem } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper>
        <Input {...getInputProps()} name="Search" id="Search" />
        <SearchResults $isVisible={isOpen && matchingStudents.length > 0} {...getMenuProps()}>
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultItem $isHighlighted={highlightedIndex === index} {...getItemProps({ item, index })} key={item.id}>
                {item.name}
              </SearchResultItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
