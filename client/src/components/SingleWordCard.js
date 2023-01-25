import React from 'react';
import { useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import { Heart, Share, MoreHorizontal, Star } from 'react-feather';
import '../css/SingleWordCard.css';

const SingleWordCard = () => {
  //Redux's state.
  const singleWord = useSelector((state) => state.editWord.word);
  const user = useSelector((state) => state.auth.user);
  const authToken = useSelector((state) => state.auth.authToken);

  const categoriesArray = singleWord?.categories.split(',');

  return (
    <div className="single-word-container">
      <div>
        <div className="single-word-button">
          <Heart style={{ cursor: 'pointer' }} className="sw-button" />
          <Share style={{ cursor: 'pointer' }} className="sw-button" />
          <MoreHorizontal style={{ cursor: 'pointer' }} className="sw-button" />
        </div>

        {/* gif? */}
        {/* <div>
          <iframe
            title="gif"
            src="https://giphy.com/embed/yoJC2GnSClbPOkV0eA"
            width="300"
            height="300"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div> */}

        <h2>{singleWord?.name}</h2>

        <div className="tag-container">
          {categoriesArray.map((category, index) => (
            <Badge key={index} bg="dark" className="sw-tag">
              {category}
            </Badge>
          ))}
        </div>

        <div className="sw-body">
          <p>
            <span style={{ fontWeight: 'bold' }}>Definition:</span>{' '}
            {singleWord?.definition}
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Example:</span> "
            {singleWord?.example}"
          </p>

          <div className="star-container">
            <span style={{ fontWeight: 'bold' }}>Use Rating:</span>
            {[...Array(singleWord?.useRating)].map((_, i) => (
              <Star className="sw-star" />
            ))}
          </div>
        </div>

        <div className="sw-video">
          <p>Check out this video that uses this word!</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Su6kidaGW_8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SingleWordCard;
