import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
import "./Bookmarks.css";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className=" md:w-1/3">
      <div className="ReadTime bg-gray-200 text-blue-500 px-4 py-4">
        <h3 className="text-xl">Spent time on read : {readingTime} min </h3>
      </div>
      <div className="bookmark">
        <h2 className="font-bold text-2xl text-center">
          <small>Bookmarked Blogs : {bookmarks.length}</small>
        </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
