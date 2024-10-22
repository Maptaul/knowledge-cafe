import { useState } from "react";
import "./App.css";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Blogs from "./Components/Header/Blogs/Blogs";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookMarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookMark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookMarks(newBookMarks);
  };

  const handleMarkAsRead = (time) => {
    setReadingTime(readingTime + time);
  };

  return (
    <>
      <Header></Header>
      <main className="md:flex p-4 max-w-7xl mx-auto">
        <Blogs
          handleAddToBookMark={handleAddToBookMark}
          handleMarkAsRead={handleMarkAsRead}
        >
          {" "}
        </Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  );
}

export default App;
