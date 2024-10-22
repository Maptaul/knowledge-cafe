import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";

const Blogs = ({ handleAddToBookMark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-3/4">
      <h1 className="text-4xl">Blog : {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookMark={handleAddToBookMark}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookMark: PropTypes.func,
};

export default Blogs;
