import React, { createContext, useState } from 'react'
import User from './User';

export const UserContext = createContext(null);


function Context() {
  const [userOne, setUserOne] = useState("Amir Dhahri");

  return (
    <div>
      <User user={userOne} />
    </div>
  )
}

export default Context