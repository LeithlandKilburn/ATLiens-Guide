import React from 'react';
import WordCard from './WordCard';
import '../css/SearchResultPage.css';

const SearchResultPage = ({ wordData, setWordData }) => {
  console.log(wordData);
  return (
    <div className="card-container">
      {/* {wordData.map((word) => {
        return <WordCard wordData={word} />;
      })} */}

      <WordCard wordData={wordData} />
      <WordCard wordData={wordData} />
      <WordCard wordData={wordData} />

      <WordCard wordData={wordData} />
      <WordCard wordData={wordData} />
      <WordCard wordData={wordData} />

      <WordCard wordData={wordData} />
      <WordCard wordData={wordData} />
      <WordCard wordData={wordData} />
    </div>
  );
};

export default SearchResultPage;
