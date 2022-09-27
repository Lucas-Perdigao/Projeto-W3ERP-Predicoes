import styled from 'styled-components'

export const ButtonStyle = styled.button<{ variant: 'login' | 'faleConosco' }>`
  background-color: #001c98;
  color: #ffffff;
  border-radius: ${({ variant }) => (variant === 'login' ? '16px' : '20px')};
  width: ${({ variant }) => (variant === 'login' ? '100%' : '80%')};
  height: ${({ variant }) => (variant === 'login' ? '56px' : '40px')};
  font-size: 16px;
  cursor: pointer;
  border: none;
  margin: 10px;
`
