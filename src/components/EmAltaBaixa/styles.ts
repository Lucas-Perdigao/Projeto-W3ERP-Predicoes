import styled, { css } from 'styled-components'
import { color } from '../../theme'

export const EmAltaBaixa = styled.span<{ variant: 'alta' | 'baixa' }>`
  padding: 8px 18px;
  border-radius: 8px;

  ${({ variant }) => {
    switch (variant) {
      case 'alta':
        return css`
          background-color: ${'#D9FEE6'};
          color: ${color.success};
        `
      default:
        return css`
          background-color: ${'#FFE1E1'};
          color: ${color.warning};
        `
    }
  }};
`
