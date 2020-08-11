import React, { useState } from "react";
import { Divider, Text, } from '@chakra-ui/core';

import PageLayout from './components/page-layout';
import AutocompleteInput from './components/autocomplete-input';

export default function HomePage() {

    const [searchQuery, setSearchQuery] = useState('test');

    return (
        <PageLayout>
            <Divider margin='1.5rem' />
        </PageLayout >
    );
}
