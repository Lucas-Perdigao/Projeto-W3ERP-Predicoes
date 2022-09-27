import styled from 'styled-components'
import { color } from '../../theme'

export const SearchInputStyle = styled.div`
  padding: 2rem;
  background-color: ${color.white};
  border-radius: 24px;
  position: relative;
  margin: 1rem 0;

  input {
    width: 400px;
    padding: 1rem;
    border-radius: 16px;
    border: 1px solid ${color.deepGrey};
  }

  .searchIcon {
    position: absolute;
    top: 47px;
    left: 390px;
  }
`
