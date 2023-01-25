import React from 'react';
import { useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import { Heart, Share, MoreHorizontal, Star } from 'react-feather';
import '../../css/SingleWordCard.css';

const ForumThread = () => {
  //Redux's state.
  const singleWord = useSelector((state) => state.editWord.word);
  const chosenThread = useSelector((state) => state.forum.chosenThread);
  const authToken = useSelector((state) => state.auth.authToken);

  const categoriesArray = chosenThread.categories ? chosenThread.categories.split(',') : [];

  return (
    <div className="single-word-container">
        <h2>Thread</h2>
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
            {chosenThread.definition}
            </p>
            <p>
            <span style={{ fontWeight: 'bold' }}>Example:</span> "
            {chosenThread.example}"
            </p>

            <div className="star-container">
            <span style={{ fontWeight: 'bold' }}>Use Rating:</span>
            {[...Array(4)].map((_, i) => (
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

        <p className="post-comments">This one gotta be in here</p>
        <p className="post-comments">How this not in here already</p>
        <p className="post-comments">This one gotta be in here</p>
    </div>
  );
};

export default ForumThread;
