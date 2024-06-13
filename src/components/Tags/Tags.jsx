import './Tags.scss';

const Tags = ({ tags }) => {
  return (
    <div className="container">
      <h3>Tags</h3>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>
            <span className={`tag tag-name ${tag}`}>{tag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
