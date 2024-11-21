import "./style.css";
import TagButton from "./TagButton";
const SideMenu = () => {
  return (
    <div className="asidebar">
      <TagButton title="click me">
        <img
          style={{ width: "20px" }}
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrWGnkEWaaNZjJTYAVRWZwi1ehw0muzeOnwg&s"
        ></img>
      </TagButton>
      <TagButton title="click me"></TagButton>
      <TagButton title="click me"></TagButton>
    </div>
  );
};

export default SideMenu;
