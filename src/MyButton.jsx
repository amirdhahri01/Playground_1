import { useState } from "react";

const MyButton = () => {
  const [name, setName] = useState("Amir Dharhi");
  const changeName = () => {
    setName("Mohammed Omri");
  };
  return (
    <>
      <button onClick={changeName}>Click Me</button>
      <h3>{name}</h3>
    </>
  );
};
export default MyButton;
