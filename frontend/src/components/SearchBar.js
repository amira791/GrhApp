import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const StyledSearchBar = ({ placeholder, onChange }) => {
  return (
    <InputGroup maxW ="200px" marginLeft={290} marginTop={50}>
      <InputLeftElement pointerEvents="none" placeholder='Search'>
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        size="md" 
        borderRadius="full" 
        borderColor="gray.400" 
      />
    </InputGroup>
  );
};

export default StyledSearchBar;
