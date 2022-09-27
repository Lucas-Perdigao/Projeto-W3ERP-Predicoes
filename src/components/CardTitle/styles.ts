import styled from 'styled-components'
import { color } from '../../theme/index'

export const CardTitleStyle = styled.div<{
  cardColor: string
}>`
  display: flex;
  align-items: center;
  gap: 15px;

  .iconDiv {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: ${({ cardColor }) => cardColor};
  }

  .titleDiv {
    color: ${({ cardColor }) =>
      cardColor === color.warning && `${color.warning}`};
  }
`
