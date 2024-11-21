import React, { useState } from "react";
import User from "./User";
import UserContext from "./UserContext";
const Context = () => {
  const [userOne, setUserOne] = useState("Amir");
  return (
    <>
      <UserContext.Provider value={{ userOne, setUserOne }}>
        <User />
      </UserContext.Provider>
    </>
  );
};
export default Context;
