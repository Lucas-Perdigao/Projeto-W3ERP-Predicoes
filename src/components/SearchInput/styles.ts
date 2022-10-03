import styled from 'styled-components'
import { color } from '../../theme'

export const SearchInputStyle = styled.div`
  padding: 1rem;

  input {
    width: 400px;
    padding: 1rem;
    border-radius: 16px;
    border: 1px solid ${color.deepGrey};
  }

  .searchIcon {
    position: absolute;
    top: 63px;
    left: 390px;
    background-color: ${color.white};
  }
`
