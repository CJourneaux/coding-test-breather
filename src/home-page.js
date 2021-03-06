import React, { useState } from "react";
import { Divider, Text } from "@chakra-ui/core";

import PageLayout from "./components/page-layout";
import AutocompleteInput from "./components/autocomplete-input";
import SearchResults from "./components/search-results";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <PageLayout>
      <AutocompleteInput
        variantColor="purple"
        value={searchQuery}
        onChange={setSearchQuery}
      />
      <Divider margin="1.5rem" />
      {searchQuery ? (
        <SearchResults query={searchQuery} />
      ) : (
        <Text as="p">
          Start typing to search through the Hacker News stories!
        </Text>
      )}
    </PageLayout>
  );
}
