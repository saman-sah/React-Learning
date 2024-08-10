import React from "react";
import User from './user'

export default function Users({ users }) {
  return (
    users.map(user => {
      return <User user={user} />
    })
  )
}