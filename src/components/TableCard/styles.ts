import styled from 'styled-components'
import { color } from '../../theme'

export const TableCardStyle = styled.div`
  background-color: ${color.white};
  width: 760px;
  margin: 2rem 0;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0px 7px 30px rgba(187, 192, 205, 0.4);

  .tableItems {
    cursor: pointer;
  }

  .tableHeader {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    padding: 0 1rem;
  }
`
