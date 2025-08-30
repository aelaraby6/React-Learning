import Button from "../Button/Button";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="side-bar">
      <Button title="first">
        <h1>Hello</h1>
        <img style={{ width: "30px" }} src="/logo512.png" alt="logo" />
      </Button>
    </div>
  );
}
