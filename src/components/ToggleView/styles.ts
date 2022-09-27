import styled, { css } from 'styled-components'
import { color } from '../../theme'

export const ToggleViewStyle = styled.div<{ switchOn: boolean }>`
  display: flex;
  width: 251px;
  height: 40px;
  padding: 5px;
  border: solid 1px #e0e0e0;
  gap: 3px;
  background-color: ${color.grey};
  border-radius: 8px;

  button {
    width: 100%;
    border: none;
    border-radius: 8px;
    color: ${color.white};
    font-size: 14px;
    background-color: ${color.grey};
  }

  ${({ switchOn }) => {
    switch (switchOn) {
      case true:
        return css`
          .up {
            background-color: ${color.success};
          }

          .down {
            background-color: ${color.grey};
            color: #9e9e9e;
          }
        `
      case false:
        return css`
          .up {
            background-color: ${color.grey};
            color: #9e9e9e;
          }

          .down {
            background-color: ${color.warning};
          }
        `
      default:
        return css`
          .up {
            background-color: ${color.grey};
            color: #9e9e9e;
          }

          .down {
            background-color: ${color.grey};
            color: #9e9e9e;
          }
        `
    }
  }}
`
