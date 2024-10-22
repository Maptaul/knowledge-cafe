import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-3/4">
      <h1 className="text-4xl">Blog : {blogs.length}</h1>
    </div>
  );
};

export default Blogs;
