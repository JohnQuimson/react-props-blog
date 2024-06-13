import './Card.scss';
import blogImage from '../../assets/image.png';
import { FaInfo, FaLongArrowAltRight } from 'react-icons/fa';

const Card = ({ title, imgageUrl, content, tags, published }) => {
  return (
    <>
      <div className={`card ${published ? 'published' : ''}`}>
        <div className="cont-img">
          <img src={blogImage} alt="img-600x400" />
        </div>
        <div className="cont-info">
          <h4>{title}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            sequi ducimus, nobis eligendi eaque, facere earum nihil
            reprehenderit accusamus incidunt animi fugit pariatur, corrupti quis
            doloribus doloremque quam optio quibusdam!
          </p>
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
