import "./App.css";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Blogs from "./Components/Header/Blogs/Blogs";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="md:flex p-4 mx-4">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  );
}

export default App;
