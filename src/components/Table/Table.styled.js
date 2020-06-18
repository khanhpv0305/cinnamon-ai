import styled from 'styled-components'
import { Table as BsTable } from 'reactstrap'

const Table = styled(BsTable)`
  color: inherit;

  thead {
    th {
      border-top: none;
      border-bottom-width: 1px;
    }
  }

  tbody {
    tr:first-child td {
      border-top: none;
    }

    td {
      vertical-align: middle;
    }
  }
`

export default Table
