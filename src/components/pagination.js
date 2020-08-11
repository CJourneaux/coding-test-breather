import React from 'react';
import {
  Box, Stack, List, ListItem,
  Button, IconButton
} from '@chakra-ui/core';

const defaultButtonStyle = {
  variant: 'ghost',
  variantColor: 'purple',
  borderRadius: '2rem',
  padding: '0.1rem',
  minWidth: '2rem',
  height: '2rem'
}

export default function Pagination({
  currentPage,
  changeToPage,
  totalPages = 1,
  firstPage = 0,
  nbSurroundingPages = 2,
}) {
  const previousVisiblePages = [];
  const nextVisiblePages = [];
  for (let i = 0; i < nbSurroundingPages; i++) {
    const possiblePreviousPage = currentPage - nbSurroundingPages + i;
    if (possiblePreviousPage >= firstPage) previousVisiblePages.push(possiblePreviousPage);

    const possibleNextPage = currentPage + (i + 1)
    if (possibleNextPage < totalPages) nextVisiblePages.push(possibleNextPage)
  }

  const visiblePages = [
    ...previousVisiblePages,
    currentPage,
    ...nextVisiblePages
  ];

  const lastPage = totalPages - 1 + firstPage;
  console.log(previousVisiblePages)

  return (
    <Box as='nav'>
      <Stack
        as={List}
        isInline
        spacing={['0rem', '1rem']}
        justifyContent={['space-between', 'center']}
      >
        <ListItem >
          <IconButton
            {...defaultButtonStyle}
            icon='arrow-back'
            aria-label='Go to first page'
            isDisabled={previousVisiblePages.length === 0 || visiblePages[0] === firstPage}
            onClick={() => changeToPage(firstPage)}
          />
        </ListItem>
        <ListItem >
          <IconButton
            {...defaultButtonStyle}
            icon='chevron-left'
            aria-label='Go to previous page'
            isDisabled={currentPage === firstPage}
            onClick={() => changeToPage(currentPage - 1)}
          />
        </ListItem>
        {visiblePages.map(pageNumber => {
          const isCurrentPage = pageNumber === currentPage;
          return (
            <ListItem key={`page-${pageNumber}`}>
              <Button
                {...defaultButtonStyle}
                variant={isCurrentPage ? 'solid' : 'ghost'}
                aria-label={isCurrentPage ? 'Current page' : 'Go to page'}
                onClick={() => changeToPage(pageNumber)}
              >
                {pageNumber + 1 - firstPage}
              </Button>
            </ListItem>
          )
        })}
        <ListItem>
          <IconButton
            {...defaultButtonStyle}
            icon='chevron-right'
            aria-label='Go to next page'
            isDisabled={currentPage === lastPage}
            onClick={() => changeToPage(currentPage + 1)}
          />
        </ListItem>
        <ListItem >
          <IconButton
            {...defaultButtonStyle}
            icon='arrow-forward'
            aria-label='Go to last page'
            isDisabled={visiblePages[visiblePages.length - 1] === lastPage}
            onClick={() => changeToPage(lastPage)}
          />
        </ListItem>

      </Stack>
    </Box >
  );
}