import React, { useContext } from "react";
import UserContext from "./UserContext";
const Button = () => {
  const { userOne, setUserOne } = useContext(UserContext);
  return (
    <button
      onClick={() => {
        setUserOne("dhahri");
      }}
    >
      Update user
    </button>
  );
};
export default Button;
