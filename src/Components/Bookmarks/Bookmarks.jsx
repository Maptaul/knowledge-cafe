const Bookmarks = ({ bookmarks }) => {
  return (
    <div>
      <h2 className="w-1/3 text-3xl">Bookmarked Blogs : {bookmarks.length}</h2>
    </div>
  );
};

export default Bookmarks;
