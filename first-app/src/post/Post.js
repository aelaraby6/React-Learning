import "./Post.css";

export default function Post({ title = "NO Title", content = "Test"}) {
  return (
    <div className="post">
      <h2>{title}</h2>
      <hr />
      <p>{content}</p>
    </div>
  );
}
