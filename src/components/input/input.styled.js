import styled from 'styled-components';
import { rgba } from 'polished';


export const FormStyled = styled.form`
  border: 1px solid ${({ theme }) => theme.global.colors.dark};
  display: flex;
  flex-wrap: wrap;
  ${({ inline }) => inline ? `
    align-items: flex-end;

    ${FormGroup} {
      position: relative;
    }

    ${FormGroup}:not(:last-of-type) {
      margin-right: 1rem;
    }

    ${ErrorStyled} {
      font-weight: 500;
      margin-top: 0;
      position: absolute;
      right: 0;
      top: 0;
    }
  ` : `
    align-items: stretch;
    flex-direction: column;
  `}
  padding: 1.5rem;
`;

export const FormGroup = styled.div`
  display: ${({ hidden }) => hidden ? 'none' : 'flex'};
  flex: 1;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const FormInputStyled = styled.input`
  border: 1px solid ${({ theme }) => rgba (theme.global.colors.dark, 0.25)};
  border-radius: .2rem;
  display: block;

  ${({ invalid, theme }) => invalid && `
    border-color: ${theme.global.colors.danger};
  `}

  padding: .5rem 1rem;

  &:disabled {
    background-color: ${({ theme }) => rgba (theme.global.colors.dark, 0.15)};
    opacity: 1;
  }


  &:hover, &:focus {
    outline: none;
    &:not(:disabled) {
      border-color: ${({ theme }) => theme.global.colors.primary};
    }
  }
`;

export const LabelStyled = styled.label`
  color: ${props => props.theme.global.colors.dark};
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const ErrorStyled = styled.div`
  color: ${props => props.theme.global.colors.danger};
  font-size: 13px;
  font-weight: 400;
  margin-top: .25rem;
  text-transform: capitalize;
`;

export const InputGroupStyled = FormGroup;

export const InputStyled = FormInputStyled;
