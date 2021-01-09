import React from 'react';

import { InputStyled, InputGroupStyled, ErrorStyled, LabelStyled } from './input.styled';


const Input = ({
  name,
  label,
  error,
  tag = 'input',
  ...rest
}) => (
    <InputGroupStyled invalid={Boolean (error)}>
      {label &&
        <LabelStyled htmlFor={name}>{label}</LabelStyled>}
      <InputStyled
        as={tag}
        name={name}
        invalid={Boolean (error)}
        {...rest}
      />
      {error &&
        <ErrorStyled>{error}</ErrorStyled>}
    </InputGroupStyled>
  );

export default Input;
