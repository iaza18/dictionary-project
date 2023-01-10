import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

function handleResponse(response){
    console.log(response.data[0]);
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
        <form onSubmit={search} className="d-flex m-4" role="search">
            <input className="form-control me-2 shadow-sm"
            type="search" 
            placeholder="Search"
            onChange={handleKeywordChange} />
        </form>
        <Results results={results} />
    </div>
    );  
}