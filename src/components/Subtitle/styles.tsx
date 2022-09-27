import styled from 'styled-components'

export const Subtitle = styled.h3<{ fontSize: number }>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-family: 'Sora', sans-serif;
  font-weight: 400;
  color: #424242;
  margin: 0;
  padding: 0;
  margin: 0.1px;
`
