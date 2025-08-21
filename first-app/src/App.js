import "./App.css";
import Header from "./Header/Header.js";
import Posts from "./posts/Posts.js";
import SideBar from "./SideBar/SideBar.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Posts />
        <SideBar />
      </div>
    </div>
  );
}

export default App;
