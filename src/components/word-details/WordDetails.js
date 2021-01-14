import React, { useEffect, useMemo } from 'react';

import { useDictionary } from '../../api';
import { WordDetailsWrapper, SoundIconStyled } from './word-details.style';


export const WordDetails = ({ word: _word }) => {
  const [{ data, loading, error }, refetch] = useDictionary(_word);

  const word = useMemo(() => data?.[0] ?? {}, [data]);

  useEffect(() => {
    refetch({
      url: `${_word}`,
    });
  }, [_word, refetch]);

  return loading ? (
    <span>Loading...</span>
  ) : error ? (
    <WordDetailsWrapper>
      <h2>Word: {_word}</h2>
      <h4>{error.response.data.title}</h4>
      <p>{error.response.data.message}</p>
      <small>{error.response.data.resolution}</small>
    </WordDetailsWrapper>
  ) : (
    <WordDetailsWrapper>
      <h2>Word: {word['word']}</h2>
      <p>{word?.['phonetics']?.[0]['text']}</p>
      <p>
        <SoundIconStyled
          onClick={() => new Audio(word['phonetics'][0]['audio']).play()}
        />
      </p>
      {word['meanings']?.map(meaning => (
        <div key={meaning['partOfSpeech']}>
          <h3>Type: {meaning['partOfSpeech']}</h3>
          <div>
            {meaning['definitions']?.map(definition => (
              <div>
                <p>
                  <strong>Definition: </strong>
                  {definition['definition']}
                </p>
                {definition['example'] &&
                  <p>
                    <strong>Example: </strong>
                    {definition['example']}
                  </p>}
                {definition['synonyms'] &&
                  <p>
                    <strong>Synonyms: </strong>
                    {definition['synonyms'].join(' - ')}
                  </p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </WordDetailsWrapper>
  );
};
