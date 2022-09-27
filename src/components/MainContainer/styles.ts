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
`
