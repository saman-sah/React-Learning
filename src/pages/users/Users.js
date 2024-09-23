import React from "react";
import User from './pages/users/user'

export default function Users({ users }) {
  return (
    users.map(user => {
      return <User user={user} />
    })
  )
}