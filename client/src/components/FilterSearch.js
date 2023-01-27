import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { wordData } from '../store/slices/WordSlice';
import '../css/FilterSearch.css';

export default function FilterSearch() {
  const [showCatButtons, setShowCatButtons] = useState(false);

  const words = useSelector((state) => state.word.words);
  const dispatch = useDispatch();

  const selectCat = () => {
    setShowCatButtons(!showCatButtons);
  };

  const catSearch = (category) => {
    try {
      fetch(`http://localhost:8080/atliens/word/category/${category}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length === 0) {
            console.log(category);
            // setErrorMessage('No Word Found. Please Try Again!');
          } else {
            dispatch(wordData(data));
            //setErrorMessage('');
            // setting the global state
            //dispatch(wordData(data));
            //navigate('/search');
          }
        });

      // .then(() => {
      //   navigate('/search');
      // });
    } catch (err) {
      console.error(err);
    }
  };

  const mostSearch = () => {
    try {
      fetch('http://localhost:8080/atliens/word/')
        .then((response) => response.json())
        .then((data) => {
          if (data.length === 0) {
            // setErrorMessage('No Word Found. Please Try Again!');
          } else {
            dispatch(wordData(data));
            //setErrorMessage('');
            // setting the global state
            //dispatch(wordData(data));
            //navigate('/search');
          }
        });

      // .then(() => {
      //   navigate('/search');
      // });
    } catch (err) {
      console.error(err);
    }
  };

  const randSearch = () => {
    try {
      fetch('http://localhost:8080/atliens/word/')
        .then((response) => response.json())
        .then((data) => {
          if (data.length === 0) {
            // setErrorMessage('No Word Found. Please Try Again!');
          } else {
            dispatch(wordData(data));
            //setErrorMessage('');
            // setting the global state
            //dispatch(wordData(data));
            //navigate('/search');
          }
        });

      // .then(() => {
      //   navigate('/search');
      // });
    } catch (err) {
      console.error(err);
    }
  };

  let catButtons = showCatButtons ? (
    // <div className="cat-buttons">
    //   <div className="back-filter" onClick={selectCat}>
    //     Back
    //   </div>
    //   <div
    //     className="search-filter"
    //     id="Happy"
    //     onClick={(e) => catSearch(e.target.id)}
    //   >
    //     Happy
    //   </div>
    //   {/* <div className="search-filter" id="test" onClick={(e) => catSearch(e.target.id)}>Test</div> */}
    //   <div
    //     className="search-filter"
    //     id="Happy"
    //     onClick={(e) => catSearch(e.target.id)}
    //   >
    //     Sad
    //   </div>
    //   <div
    //     className="search-filter"
    //     id="Happy"
    //     onClick={(e) => catSearch(e.target.id)}
    //   >
    //     Mad
    //   </div>
    //   <div
    //     className="search-filter"
    //     id="Happy"
    //     onClick={(e) => catSearch(e.target.id)}
    //   >
    //     Excited
    //   </div>
    // </div>
    <div className="cat-buttons">
            
      <div className="back-filter" onClick={selectCat}>
        Back
      </div>
            
      <div
        className="search-filter"
        id="People"
        onClick={(e) => catSearch(e.target.id)}
      >
        People
      </div>
            
      <div
        className="search-filter"
        id="Place"
        onClick={(e) => catSearch(e.target.id)}
      >
        Places
      </div>
            
      <div
        className="search-filter"
        id="Phrase"
        onClick={(e) => catSearch(e.target.id)}
      >
        Phrases
      </div>
            
      <div
        className="search-filter"
        id="Action"
        onClick={(e) => catSearch(e.target.id)}
      >
        Actions
      </div>
            
      <div
        className="search-filter"
        id="Miscellaneous"
        onClick={(e) => catSearch(e.target.id)}
      >
        Miscellaneous
      </div>
          
    </div>
  ) : (
    <div className="filter-buttons">
      <div className="search-filter" onClick={selectCat}>
        Categories...
      </div>
      <div className="search-filter" onClick={mostSearch}>
        Most Used
      </div>
      <div className="search-filter" onClick={randSearch}>
        Random
      </div>
    </div>
  );

  return <div className="filter-container">{catButtons}</div>;
}
