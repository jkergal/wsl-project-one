import React from 'react'
import { InputStyled } from './Input.styled'

export default function Input({placeholder, inputType, value, onChange}) {
  return (
    <InputStyled
    placeholder={placeholder}
    inputType={inputType}
    name={value}
    value={value}
    onChange={onChange}
    required
/>
  )
}
