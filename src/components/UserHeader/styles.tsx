import styled from 'styled-components'
import { color } from '../../theme'

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 244px);
  height: 130px;
  align-items: center;
  padding: 0 2rem;
  background-color: ${color.white};
  position: fixed;
  z-index: 999;

  .dropdown {
    border: none;
    background-color: ${color.white};
    color: ${color.grey};
    cursor: pointer;
  }
`
export const UserHeadStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
`

export const UserOptionsStyle = styled.div`
  align-items: baseline;
  background-color: ${color.white};
  position: absolute;
  border-radius: 24px;
  top: calc(100% - 20px);
  right: 10px;
  > div {
    padding: 1rem 2rem;
    display: flex;
    gap: 10px;
    &:first-child {
      border-bottom: 2px solid ${color.grey};
    }
  }

  .logout {
    background-color: ${color.white};
    border: none;
    align-items: baseline;
  }
`
