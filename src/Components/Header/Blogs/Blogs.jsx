import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";

const Blogs = ({ handleAddToBookMark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-3/4">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookMark={handleAddToBookMark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blog>
      ))}
      <h1 className="text-2xl font-bold">
        {" "}
        Total Number of Blog : {blogs.length}
      </h1>
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blogs;
