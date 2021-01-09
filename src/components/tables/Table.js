import React from 'react';
import { useFilters, useGlobalFilter, useTable } from 'react-table';

import { TableRowStyled, TableSearchRowStyled, TableStyled } from './table.styled';
import { GlobalFilter } from './filters';


export const Table = ({
  columns,
  data,
  withGlobalFilter = false,
  globalFilterHandler,
  onRowClick,
}) => {

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable (
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
  );

  return (
    <TableStyled>
      {withGlobalFilter &&
        <TableSearchRowStyled>
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
            customHandler={globalFilterHandler}
          />
        </TableSearchRowStyled>}
      <table {...getTableProps ()}>
        <thead>
          {headerGroups.map ((headerGroup, idx) => {
            const headers = headerGroup.headers;

            return (
              <tr key={idx} {...headerGroup.getHeaderGroupProps ()}>
                {headers.map ((column, index) => (
                  <th key={index} {...column.getHeaderProps ()}>
                    {column.render ('Header')}
                    {/* Render the columns filter UI */}
                    <div>{column.canFilter && column.Filter ? column.render ('Filter') : null}</div>
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps ()}>
          {rows.map ((row, i) => {
            prepareRow (row);
            const cells = row.cells;

            return (
              <TableRowStyled key={i} {...row.getRowProps ()} clickable={typeof onRowClick === 'function'} onClick={() => onRowClick?. (row.original)}>
                {cells.map ((cell, idx) => <td key={idx} {...cell.getCellProps ()}>{cell.render ('Cell')}</td>)}
              </TableRowStyled>
            );
          })}
        </tbody>
      </table>
    </TableStyled>
  );
};

export default Table;
