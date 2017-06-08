import React from 'react';

const SearchButton = (props) =>{
	let searchBtn= (<input type="submit" onClick={props.click} value="Submit" name="textBoxSubmit"/>);
	return(searchBtn);
}

export default SearchButton;