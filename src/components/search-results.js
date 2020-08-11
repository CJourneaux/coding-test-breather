import React, { useState } from "react";
import useFetch from "react-fetch-hook";
import {
  Alert, AlertIcon,
  Flex, Stack, List, ListItem,
  Heading, Text,
  Spinner,
  RadioGroup, Radio
} from '@chakra-ui/core';

import StoryCard from './story-card';


export default function SearchResults({ query }) {

  const [sortEndpoint, setSortEndpoint] = useState('search');

  const { isLoading, data, error } = useFetch(
    `https://hn.algolia.com/api/v1/${sortEndpoint}?tags=story&query=${query}`,
    { cache: 'force-cache' }, { depends: [query, sortEndpoint] }
  );

  if (isLoading) {
    return (
      <Flex as='section'>
        <Spinner
          label={`Loading results for ${query}`}
          thickness='0.25rem'
          speed="0.65s"
          size='xl'
          color='orange.500'
          emptyColor='orange.200'
          margin='4rem auto'
        />
      </Flex>
    );
  }

  if (error || !data?.hits) {
    return (
      <Alert status='error' variant="top-accent">
        <AlertIcon />
        Sorry, there was an error processing your request!
      </Alert>
    )
  }

  return (
    <Stack as='section' spacing='1.5rem'>
      <Heading as='h2' fontSize='2xl' >
        Results for "{query}"
        </Heading>

      <RadioGroup
        isInline
        spacing='1rem'
        as='fieldset'
        name='sortResults'
        defaultValue={sortEndpoint}
        onChange={(e) => setSortEndpoint(e?.target?.value)}
      >
        <Text as='legend' display='inline-flex'>Sort results by: </Text>
        <Radio value='search' size='md' variantColor='purple'>Popularity</Radio>
        <Radio value='search_by_date' size='md' variantColor='purple'>Date</Radio>
      </RadioGroup>
      <List as='ol' spacing='1rem'>
        {data.hits.length > 0
          ? data.hits.map((story, index) =>
            <ListItem key={`story-${story.objectID}`}>
              <StoryCard {...story} />
            </ListItem>
          )
          : <Alert status='warning'>
            No results found!
          </Alert>
        }
      </List>
    </Stack >
  );
}
