"use client";
import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  Checkbox,
  Input,
  InputGroup,
  Stack,
  InputRightElement,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import theme from "../../theme/index";

interface DropdownProps {
  $withSearch?: boolean;
  $dropdownName?: string;
  $datePicker?: boolean;
  $options?: string[];
  onOptionSelect?: (option: string) => void;

}

const ChakraDropdown: React.FC<DropdownProps> = ({
  $withSearch = true,
  $dropdownName,
  $options,
  onOptionSelect,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionSelect = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
    if (typeof onOptionSelect === "function") {
      onOptionSelect(value);
    }
  };
  

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={
          <ChevronDownIcon color={theme.colors.neutrals[400]} boxSize={6} />
        }
        variant="outline"
        height={"32px"}
        color={theme.colors.neutrals[600]}
        backgroundColor={theme.colors.dropdown.background}
      >
        {$dropdownName}
      </MenuButton>

      <MenuList
        backgroundColor={theme.colors.dropdown.background}
        padding={4}
      >
        {$withSearch && (
          <InputGroup width={"216px"}>
            <InputRightElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="text" placeholder="Search..." />
          </InputGroup>
        )}
        {$options?.map((option, index) => (
          <Stack pl={6} mt={1} spacing={1} key={index}>
            <Checkbox
              color={theme.colors.dropdown.listColor}
              isChecked={selectedOptions.includes(option)}
              onChange={() => handleOptionSelect(option)}
            >
              {option}
            </Checkbox>
          </Stack>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ChakraDropdown;
