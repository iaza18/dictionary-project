import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

function handleResponse(response){
    setResults(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);

}

    function search(event){
        event.preventDefault();

        //documentation: https://dictionaryapi.dev/

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary">
        <div className="form">
        <h1> Dictionary</h1>
          <h2>What word do you want to look up?</h2>
        <form onSubmit={search} role="search">
            <input className="form-control shadow-sm"
            type="search" 
            placeholder="Search"
            autoFocus="On"
            onChange={handleKeywordChange} />
        </form>
        <div className="hint">
        Suggested words: meditation, yoga, book, friendship... 
        </div>
        </div>
        <Results results={results} />
    </div>
    );  
}