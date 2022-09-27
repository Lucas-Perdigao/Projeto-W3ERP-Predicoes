import styled from 'styled-components'
import { color } from '../../theme/index'

export const TableStyle = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: 30px 30px 0 0;
  overflow: hidden;

  td {
    background-color: ${color.lightGrey};
    height: 56px;
    text-align: center;
    border-top: solid 5px ${color.white};
    padding: 0 1rem;
  }

  .tableItemsHeaders {
    background-color: ${color.blue};
    color: ${color.tablePurple};
    height: 56px;
  }
`
