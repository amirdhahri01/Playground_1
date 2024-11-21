import { useState } from "react";
import "./App.css";

function App() {
  const [formData , setFormData] = useState({
    name:"",
    age : 18,
    country:"Tunisie",
    generalInfo:"",
    isStudent:false
  });
  const handleChange = (e) => {
    setFormData(oldFormData => {
      return {
        ...oldFormData,
        [e.target.name] : e.target.value
      }
    })
    console.log(formData);
    
  }
  return (
    <>
      <form action="">
        <label htmlFor="name">Name : </label>
        <input value={formData.name} name="name" type="text" id="name" onChange={handleChange}/>
        <label htmlFor="age">Age : </label>
        <input value={formData.age} name="age" type="text" id="age" onChange={handleChange}/>
        <label htmlFor="country">Country : </label>
        <input value={formData.country} name="country" type="text" id="country" onChange={handleChange}/>
        <label htmlFor="student">Are you a student</label>
        <input type="checkbox" id="student" />
        <label htmlFor="generalInfo">General Info : </label>
        <textarea name="" id="generalInfo" onChange={handleChange}>
          {formData.generalInfo}
        </textarea>
      </form>
    </>
  );
}

export default App;
