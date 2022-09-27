import styled from 'styled-components'

export const InputStyled = styled.div`
  position: relative;
  padding: 0.5rem;

  input:hover {
    border: 1px solid purple;
    color: purple;
  }

  &.success input:focus {
    border: 1px solid purple;
    color: purple;
  }

  &.success {
    input {
      border: 1px solid #00c247;
    }

    label,
    input {
      color: #00c247;
    }
  }

  input {
    padding: 1rem;
    width: 100%;
    height: 56px;
    border-radius: 16px;
    border: 1px solid #e0e0e0;
    color: #e0e0e0;
    outline: none;
  }

  label {
    font-size: 14px;
    position: absolute;
    left: 25px;
    top: -5px;
    padding: 2px;
    background: white;
  }
`
