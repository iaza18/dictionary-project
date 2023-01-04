import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
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

    </div>
    );  
}