import React from 'react';

import './search-box.styles.css';

//Funtional Component: Gets some props and returns some html
//if you don't need internal state no access to methods

export const SearchBox = ({placeHolder, handleChange}) => (
    <input 
        className= 'search'
        type='search' 
        placeholder={placeHolder} 
        onChange={handleChange}
    />
)