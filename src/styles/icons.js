import styled from 'styled-components';

import { ReactComponent as SoundIconSvg } from '../assets/icons/volume.svg';


export const SoundIcon = styled(SoundIconSvg)`
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 5px;
  }
  &:hover {
    color: ${({ theme }) => theme.global.colors.primary};
  }
`;
