import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { color } from '../../theme'

export const MenuItemStyle = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${color.white};
  display: flex;
  padding: 1rem 0.5rem;
  gap: 20px;
  border-radius: 8px;

  &:hover {
    background-color: ${color.blueHighlight};
  }
`
