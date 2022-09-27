import styled from 'styled-components'
import { color } from '../../theme'

export const CardTitleStyle = styled.div<{
  backgroundColor: string
  textColor?: string
  round?: 'yes'
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
    border-radius: ${({ round }) => (round === 'yes' ? '40px' : '8px')};
    background-color: ${({ backgroundColor }) => backgroundColor};
  }

  .titleDiv {
    color: ${({ textColor }) =>
      textColor === color.warning && `${color.warning}`};
    font-family: Sora;
    font-weight: 600;
    font-size: 20px;
  }
`
