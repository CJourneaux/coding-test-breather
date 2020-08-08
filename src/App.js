import React, { useState } from "react";
import {
  Icon,
  InputGroup, Input, InputRightElement,
  Divider,
  Box, Flex,
  Heading,
  Text,
  Link,
} from '@chakra-ui/core'


export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Flex direction='column' minHeight='100vh'>
      <Box
        as='header'
        backgroundColor='purple.900'
        color='white'
        padding='2rem'
      >
        <Heading as='h1'>
          Search through Hacker News stories
        </Heading>
      </Box>
      <Box as='main' padding='2rem 3rem' flexGrow='1'>
        <InputGroup>
          <Input
            size='lg'
            borderRadius='5rem'
            placeholder="Flushed"
            onChange={event => setSearchQuery(event.target?.value)}
            value={searchQuery}
          />
          <InputRightElement >
            <Icon name='search' color='gray.300' />
          </InputRightElement>
        </InputGroup>
        <Divider margin='1.5rem' />
        <Box as='section'>
          <Heading as='h2'>
            Results for "{searchQuery}"
          </Heading>
          <Box as='article'></Box>
        </Box>
      </Box>
      <Box
        as='footer'
        backgroundColor='purple.900'
        color='white'
        padding='2rem'
      >
        <Text
          as='span'
          display='block'
          textAlign='end'
        >
          Created by <Link href='https://github.com/CJourneaux/'>Cécile Journeaux</Link> for <Link href='https://boards.greenhouse.io/breather/jobs/2103290?gh_jid=2103290'>Breather</Link> - August 2020
        </Text>
      </Box>
    </Flex >
  );
}
