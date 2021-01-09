import styled from 'styled-components';
import { rgba, darken } from 'polished';


export const AlertStyled = styled.div`
background-color: ${({ theme }) => rgba (theme.global.colors.danger, 0.2)};
border: 1px solid ${({ theme }) => theme.global.colors.danger};
color: ${({ theme }) => darken (0.5) (theme.global.colors.danger)};
padding: 1rem 1.5rem;
`;
