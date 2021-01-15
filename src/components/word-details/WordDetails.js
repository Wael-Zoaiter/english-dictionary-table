import React, { memo, useEffect, useMemo } from 'react';

import { useDictionary } from '../../api';
import { SoundIcon } from '../../styles';
import { Loader } from '../loader';
import { Scrollbar } from '../scrollbar';

import { Title, Subtitle, WordDetailsWrapper, Section, SectionTitle, SectionBody, SectionBodyText, Div } from './word-details.style';


export const WordDetails = memo(({ word: _word, getWord = () => {} }) => {
  const [{ data, loading, error }, refetch] = useDictionary(_word);

  const word = useMemo(() => data?.[0] ?? {}, [data]);

  useEffect(() => {
    refetch({
      url: `${_word}`,
    });
  }, [_word, refetch]);

  useEffect(() => {
    getWord(word);
  }, [word, getWord]);

  return loading ? (
    <WordDetailsWrapper>
      <Loader />
    </WordDetailsWrapper>
  ) : error ? (
    <WordDetailsWrapper>
      <Div>
        <Title>Word: {_word}</Title>
        <h4>{error.response.data.title}</h4>
        <p>{error.response.data.message}</p>
        <small>{error.response.data.resolution}</small>
      </Div>
    </WordDetailsWrapper>
  ) : (
    <WordDetailsWrapper>
      <Scrollbar style={{ padding: '1rem' }}>
        <Title>{word['word']}</Title>
        <Subtitle>
          <span>{word?.['phonetics']?.[0]?.['text']}</span>
          <SoundIcon
            onClick={() => new Audio(word?.['phonetics']?.[0]?.['audio']).play()}
          />
        </Subtitle>
        {word['meanings']?.map(meaning => (
          <Section key={meaning['partOfSpeech']}>
            <SectionTitle>Type: {meaning['partOfSpeech']}</SectionTitle>
            <SectionBody>
              {meaning['definitions']?.map(definition => (
                <div key={definition['definition']}>
                  <SectionBodyText>
                    <strong>Definition: </strong>
                    {definition['definition']}
                  </SectionBodyText>
                  {definition['example'] &&
                    <SectionBodyText>
                      <strong>Example: </strong>
                      {definition['example']}
                    </SectionBodyText>}
                  {definition['synonyms'] &&
                    <SectionBodyText>
                      <strong>Synonyms: </strong>
                      {definition['synonyms'].join(' - ')}
                    </SectionBodyText>}
                </div>
              ))}
            </SectionBody>
          </Section>
        ))}
      </Scrollbar>
    </WordDetailsWrapper>
  );
}, (prevProp, nextProp) => prevProp.word === nextProp.word);
