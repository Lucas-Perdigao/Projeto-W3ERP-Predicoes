import styled, { css } from 'styled-components'
import { color } from '../../theme'

export const NumberCardStyle = styled.div<{
  variant: 'up' | 'down' | 'average' | 'lastDays'
}>`
  background-color: ${color.deepBlue};
  display: flex;
  height: 124px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  ${({ variant }) => {
    switch (variant) {
      case 'lastDays':
        return css`
          background-color: ${color.white};
          justify-content: left;
          padding-left: 2rem;
          width: 296px;
        `
      case 'average':
        return css`
          justify-content: left;
          padding-left: 2rem;
          width: 296px;
        `
      default:
        return css`
          background-color: ${color.deepBlue};
          width: 346px;
        `
    }
  }}
  ${({ variant }) => {
    switch (variant) {
      case 'lastDays':
        return css`
          color: ${color.deepBlue};
        `
      default:
        return css`
          color: ${color.white};
        `
    }
  }}

  .numberDiv {
    display: flex;
    align-items: center;
    gap: 20px;

    .number {
      font-weight: bold;
      font-family: Sora;
      font-size: 32px;
    }

    .tagPercentage {
      background: ${({ variant }) =>
        variant === 'up' ? color.success : color.warning};
      font-size: 13px;
      padding: 2px 13px;
      border-radius: 100px;
      color: ${color.white};
    }
  }
`
