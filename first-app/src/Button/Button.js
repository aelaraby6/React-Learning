import "./Button.css";

export default function Button({ title = "Button", children }) {
  return (
    <div>
      <button className="btn">
        {title}
        {children}
      </button>
    </div>
  );
}
