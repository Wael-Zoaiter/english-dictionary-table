import styled from 'styled-components';


export const WordDetailsWrapper = styled.div`
  border-radius: 8px;
  height: 300px;
  overflow: hidden;
  padding-bottom: 1rem;
  &:not(:last-of-type) {
    margin-bottom: 15px;
  }

  animation: gradient 15s linear infinite;
  animation-direction: alternate;
  border: 2px solid #212125;
  background: linear-gradient(to right,#d367c1 10%,#dedf40 25%,#62cb5c 50%,#00bbcb 75%,#ab79d6 90%);
  background-size: 1000% 100%;
`;

export const Title = styled.h2`
  text-transform: capitalize;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h6`
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 1rem;
  svg {
    margin-left: 1rem;
  }
`;

export const Section = styled.div`
`;

export const SectionTitle = styled.h3`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-top: .3rem;
  padding-bottom: .3rem;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

export const SectionBody = styled.div`

`;

export const SectionBodyText = styled.p`

`;

export const Div = styled.div`
  padding: 1rem;
`;
