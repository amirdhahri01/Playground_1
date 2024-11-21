import "./style.css";
const TagButton = ({ title, children }) => {
  return (
    <div className="button">
      {title}
      {children}
    </div>
  );
};
export default TagButton;
