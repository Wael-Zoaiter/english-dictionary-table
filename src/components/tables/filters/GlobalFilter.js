import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import styled from 'styled-components';

import { Input } from '../../input';


// Define a default UI for filtering
export function GlobalFilter ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  customHandler,
}) {
  const count = preGlobalFilteredRows?.length;
  const [value, setValue] = useState (globalFilter);

  const onChange = useAsyncDebounce (value => {
    const handler = typeof customHandler === 'function' ? customHandler : setGlobalFilter;
    handler (value || undefined);
  }, 200);

  return (
    <Styles>
      <Input
        value={value || ''}
        placeholder={`Search ${count} records...`}
        onChange={e => {
          setValue (e.target.value);
          onChange (e.target.value);
        }}
      />
    </Styles>
  );
}

const Styles = styled.span`
  display: block;
  margin-bottom: 1rem;
  input {
    border-radius: 0;
    border-width: 2px;
    font-size: 1rem;
  }
`;
