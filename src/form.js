import React, { memo, useCallback } from 'react'
import InputComponent from './InputComponent'

function Form({ user, handler }) {
  const handlerIn = useCallback((event) => {
    handler(user.id, event.target.name, event.target.value)
  }, []);
  return (
    <form >
      <InputComponent
        name="name"
        value={user.name}
        handler={handlerIn}
      />
      <InputComponent
        name="email"
        value={user.email}
        handler={handlerIn}
      />
    </form>
  )
}

export default memo(Form)