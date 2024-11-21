import "./style.css";
const Post = ({ title, content }) => {
  return (
    <div className="post">
      <h3>{title}</h3>
      <hr />
      <p>{content}</p>
    </div>
  );
};
export default Post;
