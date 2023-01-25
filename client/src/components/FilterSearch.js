import { useSelector, useDispatch } from 'react-redux';
import { wordData } from '../store/slices/WordSlice';
import '../css/FilterSearch.css'

export default function FilterSearch() {
    
    const words = useSelector((state) => state.word.words);
    const dispatch = useDispatch();

    const catSearch = () => {
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
    }

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
    }

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
    }

    return (
        <div className="filter-container">
           <div className="filter-buttons">
           {console.log(words)}
                <div className="search-filter" onClick={catSearch}>Categories</div>
                <div className="search-filter" onClick={mostSearch}>Most Used</div>
                <div className="search-filter" onClick={randSearch}>Random</div>
            </div>
        </div>
    )
}