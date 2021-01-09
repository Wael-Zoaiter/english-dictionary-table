import React from 'react';
import styled from 'styled-components';

import { SoundIcon } from "../../styles";

const SoundIconStyled = styled(SoundIcon)`
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 5px;
  }
  &:hover {
    color: ${({ theme }) => theme.global.colors.primary};
  }
`;


export const dictionaryColumns = [
  {
    Header: 'Dictionary',
    columns: [
      {
        Header: 'Word',
        accessor: 'word',
      },
      {
        Header: 'Definition',
        accessor: 'definition',
      },
      {
        Header: 'Example',
        accessor: 'example',
      },
      {
        Header: 'Sound',
        accessor: 'sound_urls',
        Cell: ({ value }) => <span>{value?.map(voice => (
          <SoundIconStyled
            onClick={() => new Audio(voice).play()}
          />
        ))}</span>
      },
    ],
  },
];
