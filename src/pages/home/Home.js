import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Flex } from 'reflexbox';
import { useDebounce } from 'use-debounce';
import qs from 'qs';

import { Input } from '../../components';
import { AudioPlayer } from '../../components/audio-player';
import { WordDetails } from '../../components/word-details/WordDetails';

import { getAudioFromDetails } from './home.config';


function Home() {
  const [_text, setText] = useState();
  const [text] = useDebounce(_text, 1000);
  const words = useMemo(() => text?.split(',') || [], [text]);
  const [wordsDetails, setWordsDetails] = useState([]);
  const { search } = useLocation();
  const history = useHistory();

  useEffect(() => {
    const queryString = search.slice(1);
    const params = queryString ? qs.parse(queryString) : {};
    setText(params.text);
  }, [search]);

  const handleChange = ({ target: { value = '' } = {} }) => {
    history.push(`?text=${value}`);
  }

  return (
    <div className="Home">
      <Flex flexWrap="wrap" pt="2rem" px={['1rem', '2rem']}>
        <Box width={[1, 10 / 12]} justifyContent="center" alignItems="center">
          <Input
            onChange={handleChange}
            value={_text}
            label="Type something"
            placeholder="Find definition for one word, or multiple comma ',' separte words"
            tag="textarea"
            rows="5"
          />
        </Box>
        <Box width={[1, 2 / 12]} justifyContent="center" alignItems="center">
          <AudioPlayer audioList={getAudioFromDetails(wordsDetails)} />
        </Box>
      </Flex>
      <Flex flexWrap="wrap" mx="-0.5rem" pb="2rem" px={['1rem', '2rem']}>
        {words.map(word => Boolean(word) && (
          <Box width={[1, 1 / 2, 1 / 3, 1 / 4]} mt="1rem" px=".5rem" key={word}>
            <WordDetails
              word={word.trim()}
              getWord={wordDetail => setWordsDetails(prevWordsDetails => [...prevWordsDetails, wordDetail])}
            />
          </Box>
        ))}
      </Flex>
    </div>
  );
}

export default Home;
