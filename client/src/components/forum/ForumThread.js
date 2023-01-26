import React from 'react';
import { useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import { Heart, Share, MoreHorizontal, Star } from 'react-feather';
import '../../css//forum/forum-thread.css';

const ForumThread = () => {
  //Redux's state.
  const chosenThread = useSelector((state) => state.forum.chosenThread);
  const authToken = useSelector((state) => state.auth.authToken);

  const categoriesArray = chosenThread.categories ? chosenThread.categories.split(',') : [];

  return (
    <div className="thread-cont">
        <div className="thread-body">
        <h2>New Slang: {chosenThread.name}</h2>

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
        <div className="forum-react-buttons">
            <Heart style={{ cursor: 'pointer' }} className="sw-button" />
            <Share style={{ cursor: 'pointer' }} className="sw-button" />
            <MoreHorizontal style={{ cursor: 'pointer' }} className="sw-button" />
        </div>
    </div>

    <div className="forum-com-box">
        <p className="thread-comments">This one gotta be in here</p>
        <p className="thread-comments">How this not in here already</p>
        <p className="thread-comments">This one gotta be in here</p>
        
        <p className="thread-comments">This one gotta be in here</p>
        <p className="thread-comments">How this not in here already</p>
        <p className="thread-comments">This one gotta be in here</p>
    </div>
    </div>
  );
};

export default ForumThread;
