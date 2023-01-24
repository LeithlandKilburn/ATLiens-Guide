import '../css/FilterSearch.css'

export default function FilterSearch() {

    const quickSearch = () => {
        
    }

    return (
        <div className="filter-container">
           <div className="filter-buttons">
                <div className="search-filter" onClick>Categories</div>
                <div className="search-filter">Most Used</div>
                <div className="search-filter">Random</div>
            </div>
        </div>
    )
}