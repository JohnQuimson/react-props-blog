import './Card.scss';
// import blogImage from '../../assets/image.png';

import {
  FaInfo,
  FaLongArrowAltRight,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
} from 'react-icons/fa';

const Card = ({ title, imageUrl, content, tags, published }) => {
  const tagIcons = {
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    js: <FaJs />,
    php: <FaPhp />,
  };

  return (
    <>
      <div className={`card ${published ? 'published' : ''}`}>
        <div className="cont-img">
          <img
            src={imageUrl || 'https://picsum.photos/600/400'}
            alt="def-img"
          />
        </div>
        <div className="cont-info">
          <h4>{title}</h4>
          <p>{content}</p>
          <h3>Tags</h3>
          <ul>
            {/* Set per rimuovere i duplicati */}
            {[...new Set(tags)].map((tag, i) => (
              <li key={`tag${i}`}>
                <span className={`tag-icon ${tag}`}>{tagIcons[tag]}</span>
                <span className={`tag-name ${tag}`}>{tag}</span>
              </li>
            ))}
          </ul>
          <button>
            <FaInfo />
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
