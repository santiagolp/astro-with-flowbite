import React, { useState } from 'react';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log('searching for:', searchTerm);
    }

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Search;