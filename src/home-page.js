import React, { useState } from "react";
import { Divider, Text, } from '@chakra-ui/core';

import PageLayout from './components/page-layout';
import AutocompleteInput from './components/autocomplete-input';

export default function HomePage() {

  const [searchQuery, setSearchQuery] = useState('test');

  return (
    <PageLayout>
      <AutocompleteInput
        variantColor='purple'
        value={searchQuery}
        onChange={setSearchQuery}
      />
      <Divider margin='1.5rem' />
    </PageLayout >
  );
}
