import React from 'react';
import { Box, Flex } from 'reflexbox';

import { useDictionary } from '../../api';
import { Alert, Input, Table } from '../../components';
import { dictionaryColumns } from './home.config';


function Home() {
  const [{ data, loading, error }, refetch] = useDictionary('hello');

  return (
    <div className="Home">
      <Flex flexDirection="column" m="3rem">
        {error?.message &&
          <Box width={1} mx="auto" mb={3}>
            <Alert>{error?.message}</Alert>
          </Box>}
        <Input
          onChange={({ target: { value = '' } = {} }) => refetch({ params: { term: value }})}
          placeholder="Find definition"
        />
        <Box width={1} mx="auto">
          <Table
            data={data?.list || []}
            loading={loading}
            columns={dictionaryColumns}
          />
        </Box>
      </Flex>
    </div>
  )
}

export default Home;
