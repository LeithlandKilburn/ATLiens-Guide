// import React from 'react';
// import { useEffect, useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Edit, X, Edit2 } from 'react-feather';
// import '../css/WordCard.css';
// import { useSelector } from 'react-redux';
// import { wordData } from '../store/slices/WordSlice';

// const WordCard = () => {
//   const navigate = useNavigate();

//   //Redux's state.
//   const wordId = useSelector((state) => state.word.wordId);
//   const name = useSelector((state) => state.word.name);
//   const definition = useSelector((state) => state.word.definition);
//   const example = useSelector((state) => state.word.example);
//   const useRating = useSelector((state) => state.word.useRating);
//   const videoURL = useSelector((state) => state.word.videoURL);
//   const category1Id = useSelector((state) => state.word.category1Id);
//   const category2Id = useSelector((state) => state.word.category2Id);
//   const category3Id = useSelector((state) => state.word.category3Id);

//   const handleDelete = () => {};

//   const handleEdit = () => {
//     navigate('/edit/' + wordId);
//   };

//   return (
//     <div className="single-card">
//       <Card>
//         {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//         <Card.Body>
//           <div className="card-buttons">
//             <Edit2 onClick={handleEdit} />
//             <X onClick={handleDelete} />
//           </div>
//           <div className="card-body">
//             <Card.Title>{name}</Card.Title>
//             <Card.Text>{definition}</Card.Text>
//             <Card.Text>{useRating}</Card.Text>
//             {/* <Card.Title>TEST NAME</Card.Title>
//             <Card.Text>TEST DEFINITION</Card.Text>
//             <Card.Text>TEST USERATING</Card.Text> */}
//             <Button variant="primary">View More</Button>
//           </div>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default WordCard;
