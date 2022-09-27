import styled from 'styled-components'
import { color } from '../../theme'

export const MenuSidebarStyle = styled.div`
  background-color: ${color.blue};
  color: ${color.white};
  width: 271px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2.5rem 0;
`

export const MenuContainer = styled.div`
  gap: 10px;
  padding: 10px;
`
