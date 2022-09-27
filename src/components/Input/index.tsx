// import { useState } from 'react'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { InputStyled } from './styles'

type Props = {
  label: string
  placeholder: string
  inputState: string
  inputSetState: Dispatch<SetStateAction<string>>
}

export function Input({
  label,
  placeholder,
  inputState,
  inputSetState,
}: Props) {
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    inputSetState(event.target.value)
  }

  return (
    <InputStyled className={inputState ? 'success' : ''}>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        value={inputState}
        placeholder={placeholder}
        onChange={handleInput}
      />
    </InputStyled>
  )
}
