import styled from 'styled-components';

import { SoundIcon } from "../../styles"; 


export const WordDetailsWrapper = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 15px;
  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`;

export const SoundIconStyled = styled(SoundIcon)`
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 5px;
  }
  &:hover {
    color: ${({ theme }) => theme.global.colors.primary};
  }
`;