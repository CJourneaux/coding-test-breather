import React from "react";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/core";

export default function PageLayout({ children }) {
  return (
    <Flex direction="column" minHeight="100vh">
      <Box
        as="header"
        backgroundColor="purple.900"
        color="white"
        padding="2rem"
      >
        <Heading as="h1">Search through Hacker News stories</Heading>
      </Box>
      <Box as="main" padding={["2rem 1.5rem", "2rem 3rem"]} flexGrow="1">
        {children}
      </Box>
      <Box
        as="footer"
        backgroundColor="purple.900"
        color="white"
        padding="2.5rem 2.5rem 2rem"
      >
        <Text as="span" display="block" textAlign="end">
          Created by{" "}
          <Link href="https://github.com/CJourneaux/">Cécile Journeaux</Link>{" "}
          for{" "}
          <Link href="https://boards.greenhouse.io/breather/jobs/2103290?gh_jid=2103290">
            Breather
          </Link>{" "}
          - August 2020
        </Text>
      </Box>
    </Flex>
  );
}
