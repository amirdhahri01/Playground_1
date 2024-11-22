import React, { createContext, useState } from 'react'
import User from './User';

export const UserContext = createContext(null);

function Context() {
  
  const [userOne, setUserOne] = useState("Amir Dhahri");

  return (
    <UserContext.Provider value={userOne}>
      <User/>
    </UserContext.Provider>
  )
}

export default Context