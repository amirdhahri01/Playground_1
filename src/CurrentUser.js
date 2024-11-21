import React, { useContext } from "react";
import UserContext from "./UserContext";
const CurrentUser = () => {
  const { userOne, setUserOne } = useContext(UserContext);
  return <div>{userOne}</div>;
};
export default CurrentUser;
