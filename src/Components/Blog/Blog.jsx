import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    authors,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-16 space-y-4">
      <img
        className=" w-full rounded-md mb-4"
        src={cover}
        alt={`cover picture of the tittle ${title}`}
      />
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-4 p-4 items-center">
          <img
            className="w-[60px] h-[60px] rounded-full"
            src={author_img}
            alt={`picture of the authors ${title}`}
          />
          <div className="">
            <h3 className="text-2xl font-bold">{authors}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="items-center justify-center align-middle">
          <span className="text-xl">{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookMark(blog)}
            className="ml-2 text-red-600 text-2xl"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-600 font-bold underline"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
