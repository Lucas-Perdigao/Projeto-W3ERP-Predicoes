import styled from 'styled-components'
import { color } from '../../theme'

export const FilterStyle = styled.div`
  button {
    padding: 0.5rem;
    background-color: ${color.white};
  }

  .filterBy {
    font-weight: 600;
    border-bottom: 2px solid ${color.grey};
    padding: 0.5rem 0;
  }

  .filterItem {
    display: flex;
    gap: 10px;
    padding: 0.5rem 0;
  }

  .status {
    margin: 0.5rem 0;
  }

  .filterOptions {
    background-color: ${color.white};
    font-size: 16px;
    font-weight: 400;
    width: 290px;
    position: absolute;
    padding: 1rem;
    top: -75px;
    left: 525px;
    border: 1px solid ${color.grey};
    border-radius: 16px;
  }

  .buttonDiv {
    display: flex;
    justify-content: center;

    button {
      background-color: ${color.blue};
    }
  }
`
