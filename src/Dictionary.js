import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState("");

function handleDictionaryResponse(response){
    setResults(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);

}

function handlePexelsResponse(response) {
setPhotos(response.data.photos);
}

    function search(){

        //documentation: https://dictionaryapi.dev/

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);


        let pexelsApiKey = "563492ad6f917000010000011ab956dbd4964174b4cce00b996a450e";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }
    if (loaded) {
    return (
    <div className="Dictionary">
        <div className="form">
        <h1> Dictionary</h1>
          <h2 className="text-header">What word do you want to look up?</h2>
        <form onSubmit={handleSubmit}>
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
        <Photos photos={photos} data={keyword} />
    </div>
    );  
    } else {
        load();
        return null;
    }
}