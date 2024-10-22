import { useState } from "react";
import "./App.css";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Blogs from "./Components/Header/Blogs/Blogs";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookMarks] = useState([]);

  const handleAddToBookMark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookMarks(newBookMarks);
  };

  return (
    <>
      <Header></Header>
      <main className="md:flex p-4 max-w-7xl mx-auto">
        <Blogs handleAddToBookMark={handleAddToBookMark}> </Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  );
}

export default App;
