import PropTypes from "prop-types";
const Blog = ({ blog }) => {
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
    <div>
      <img
        className=" rounded-md"
        src={cover}
        alt={`cover picture of the tittle ${title}`}
      />
      <div className="flex justify-between">
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
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
