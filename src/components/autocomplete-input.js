import React from "react";
import useFetch from "react-fetch-hook";
import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListItem,
  Spinner,
  useTheme
} from "@chakra-ui/core";
import { useCombobox } from "downshift";

export default function AutoCompleteSearchInput({
  variantColor,
  value,
  onChange
}) {
  const { isLoading, data, error } = useFetch(
    `https://hn.algolia.com/api/v1/search?tags=story&query=${value}`,
    { cache: "force-cache" },
    { depends: [value] }
  );

  const options =
    value && data?.hits && !error ? data.hits.map(({ title }) => title) : [];

  const { colors } = useTheme();
  const borderColor = colors[variantColor]["900"];
  const borderRadius = "1rem";

  const {
    isOpen,
    highlightedIndex,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps
  } = useCombobox({
    items: options,
    onInputValueChange: ({ inputValue }) => onChange(inputValue),
    defaultIsOpen: false
  });

  const showDropdown = isOpen && (isLoading || options.length > 0);

  const inputStyling = showDropdown
    ? {
        borderBottomLeftRadius: "none",
        borderBottomRightRadius: "none",
        borderBottom: "none"
      }
    : {};

  return (
    <Box position="relative">
      <Box {...getComboboxProps()}>
        <InputGroup>
          <InputLeftElement>
            <Icon name="search" color="gray.300" marginLeft="0.25rem" />
          </InputLeftElement>
          <Input
            type="search"
            size="lg"
            borderRadius={borderRadius}
            focusBorderColor={borderColor}
            aria-label="Search through Hacker News stories"
            placeholder="Start typing"
            name="searchQuery"
            {...inputStyling}
            {...getInputProps()}
          />
        </InputGroup>
      </Box>
      <Box position="absolute" zIndex="dropdown" width="100%">
        <Box
          as={List}
          {...getMenuProps()}
          width="100%"
          borderWidth={showDropdown ? "1px" : "0"}
          borderColor={borderColor}
          borderTop="none"
          borderBottomLeftRadius={borderRadius}
          borderBottomRightRadius={borderRadius}
          boxShadow={showDropdown && `0 0 0 1px ${borderColor}`}
          backgroundColor="white"
          maxHeight="14rem"
          overflow={isLoading ? "hidden" : "auto"}
        >
          {showDropdown &&
            (isLoading ? (
              <Spinner display="block" margin="0.75rem auto" />
            ) : (
              options.map((item, index) => {
                const itemStyling =
                  highlightedIndex === index
                    ? {
                        color: `${variantColor}.900`,
                        backgroundColor: `${variantColor}.100`
                      }
                    : { color: "gray.500" };

                return (
                  <ListItem
                    key={`suggestion-${index}`}
                    {...getItemProps({ item, index })}
                    padding="0.25rem 1rem"
                    {...itemStyling}
                  >
                    {item}
                  </ListItem>
                );
              })
            ))}
        </Box>
      </Box>
    </Box>
  );
}
