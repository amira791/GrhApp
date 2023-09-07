import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const StyledSearchBar = ({ placeholder, onChange }) => {
  return (
    <InputGroup maxW ="300px" marginLeft={320} marginTop={79}>
      <InputLeftElement pointerEvents="none" placeholder='Search'>
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        size="md" // You can adjust the size as needed
        borderRadius="full" // Makes it a rounded search bar
        borderColor="gray.400" // Change the border color
      />
    </InputGroup>
  );
};

export default StyledSearchBar;
