import React, { useMemo, useState } from 'react';
import { Box, Flex } from 'reflexbox';
import { useDebounce } from 'use-debounce';
import { Input } from '../../components';
import { WordDetails } from '../../components/word-details/WordDetails';


function Home() {
  const [_text, setText] = useState();
  const [text] = useDebounce(_text, 1000);
  const words = useMemo(() => text?.split(',') || [], [text]);

  return (
    <div className="Home">
      <Flex flexDirection="column" m="3rem">
        <Input
          onChange={({ target: { value = '' } = {} }) => setText(value)}
          placeholder="Find definition for one word, or multiple comma ',' separte words"
          tag="textarea"
          rows="5"
        />
        <Box width={1} mx="auto">
          <Flex flexWrap="wrap" justifyContent="space-evenly">
            {words.map(word => (
              <Box width={1 / 4} m="1rem">
                <WordDetails word={word} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}

export default Home;
