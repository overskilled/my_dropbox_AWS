import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Assuming you're using react-icons for the search icon

const SearchBar = ({ onChange }) => {
    return (
        <div className="input-group">
            <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={onChange}
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                <FaSearch className="search-icon" />

                </button>
            </div>
        </div>
    );
};

export default SearchBar;