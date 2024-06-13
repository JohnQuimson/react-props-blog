import './Card.scss';
// import blogImage from '../../assets/image.png';
import { FaInfo, FaLongArrowAltRight } from 'react-icons/fa';

const Card = ({ title, imageUrl, content, tags, published }) => {
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
              <li key={`tag${i}`}>{tag}</li>
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
