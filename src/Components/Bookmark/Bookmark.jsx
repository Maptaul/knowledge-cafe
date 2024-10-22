import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
      <h3 className="text-3xl">{title}</h3>
    </div>
  );
};

bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
