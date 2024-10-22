import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
import "./Bookmarks.css";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="bookmark md:w-1/3">
      <h2 className="font-bold text-2xl text-center">
        <small>Bookmarked Blogs : {bookmarks.length}</small>
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};

export default Bookmarks;
