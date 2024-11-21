import { useState } from "react";
import "./App.css";

function App() {
  // const [formData, setFormData] = useState({
  //   name : "",
  //   age : 18,
  //   country : "Tunisie",
  //   generalInfo : "",
  //   programmingLanguage : "",
  //   isStudent : false,
  //   status : ""
  // });
  // const handleChange = (e) => {
  //   setFormData(oldFormData => {
  //     return {
  //       ...oldFormData,
  //       [e.target.name]: e.target.value
  //     }
  //   })
  // }
  // const handleCheckbox = (e) => {
  //   setFormData(oldFormData => {
  //     return {
  //       ...oldFormData,
  //       [e.target.name]: e.target.checked
  //     }
  //   })
  // }
  // console.log(formData);
  const [deviceNameInputValue , setDeviceNameInputValue] = useState("");
  const [devices , setDevices] = useState(["iphone", "mac", "samsung", "windows"]);
  const devicesList = devices.map((device) => {
    return <li>{device}</li>
  })
  const handleAddClick = (e) => {
    setDevices([...devices ,deviceNameInputValue])
  }
  return (
    <>
      <div className="app" style={{ marginTop: "100px", fontSize: "30px" }}>
        <ul>
          {devicesList}
        </ul>
        <div>
          <input type="text" name="" id="" value={deviceNameInputValue} onChange={(e) => {
            console.log(e.target.value);
            
            setDeviceNameInputValue(e.target.value);
          }} />
          <button onClick={handleAddClick}>Add</button>
        </div>
      </div>
      {/* <form action="">
        <label htmlFor="name">Name : </label>
        <input value={formData.name} name="name" type="text" id="name" onChange={handleChange} />
        <label htmlFor="age">Age : </label>
        <input value={formData.age} name="age" type="text" id="age" onChange={handleChange} />
        <label htmlFor="country">Country : </label>
        <input value={formData.country} name="country" type="text" id="country" onChange={handleChange} />
        <label htmlFor="student">Are you a student</label>
        <input type="checkbox" id="student" name="isStudent" checked={formData.isStudent} onChange={handleCheckbox} />
        <label htmlFor="generalInfo">General Info : </label>
        <textarea name="" id="generalInfo" onChange={handleChange}>
          {formData.generalInfo}
        </textarea>
        <hr />
        <select name="programmingLanguage" value={formData.programmingLanguage} onChange={handleChange}>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="ruby">Ruby</option>
          <option value="php">PHP</option>
        </select>
        <hr />
        <div>
          <input value="student" type="radio" name="status" id="status" checked={formData.status === "student"} onChange={handleChange}/>
          Student
          <input value="teacher" type="radio" name="status" id="status" checked={formData.status === "teacher"} onChange={handleChange}/>
          Teacher
        </div>
      </form> */}
    </>
  );
}

export default App;
