import React, { memo } from 'react'

function InputComponent({ value, name, handler }) {
  console.log('inputttttt')
  return (
    <input
      type='text'
      value={value}
      name={name}
      onChange={handler}
    />
  )
}

export default memo(InputComponent);