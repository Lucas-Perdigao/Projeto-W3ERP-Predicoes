import styled from 'styled-components'
import { color } from '../../theme/index'

export const MainContainer = styled.div`
  padding: 2rem;
  background: ${color.grey};
  margin-top: 8rem;

  .link {
    text-decoration: none;
  }

  .pageTitle {
    padding: 2rem 0;
  }

  .productCardSummaryDiv {
    display: flex;
    gap: 10px;
  }

  .whiteContainer {
    padding: 2rem;
    background-color: ${color.white};
    border-radius: 24px;
    position: relative;
    margin: 1rem 0;
  }

  .flex {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  table,
  a {
    color: ${color.black};
    text-decoration: none;
  }
  button {
    border: none;
    background-color: #fafafa;
    cursor: pointer;
  }
`
