import { rgba } from 'polished';
import styled from 'styled-components';


export const TableSearchRowStyled = styled.div`
  span {
    display: flex;
    width: 100%;
    input {
      flex: 1;
    }
  }
`;

export const TableRowStyled = styled.tr`
${({ clickable, theme }) => clickable && `
  cursor: pointer;
  &:hover {
    background: ${rgba (theme.global?.colors?.primary, 0.05)};
  }
`}
`;

export const TableStyled = styled.div`
  width: 100%;

  table {
    border: 1px solid black;
    border-spacing: 0;
    width: 100%;

    th,
    td {
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      margin: 0;
      padding: 0.5rem;

      :last-child {
        border-right: 0;
      }
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
  }
`;
