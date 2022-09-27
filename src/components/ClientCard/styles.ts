import styled from 'styled-components'
import { color } from '../../theme'

export const ClientCardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 -10px;
  padding: 2rem;
  > div {
    padding: 0 10px;
    margin-bottom: 20px;
    width: 100%;
    flex: 0 0 auto;
    @media (min-width: 576px) {
      width: 50%;
    }
    @media (min-width: 768px) {
      width: 33.33%;
    }
    @media (min-width: 992px) {
      width: 25%;
    }
  }
`

export const ClientCardStyle = styled.div`
  background-color: ${color.white};
  width: 100%;
  border-radius: 24px;
  padding: 1rem;

  a {
    text-decoration: none;
  }

  .ClientCardHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  .HeaderItems {
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: left;
    padding: 1rem 0;
  }
  .status {
    color: ${color.success};
    margin-left: 25px;
  }

  table {
    background-color: ${color.grey};
    margin: 0 auto;
    border-radius: 16px;
    width: 299px;
    text-align: center;
    padding: 1rem;
  }

  .titles {
    color: ${color.lightPurple};
    th {
      font-weight: 400;
    }
  }
`
