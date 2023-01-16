import React from "react";
import Synonyms from "./Synonyms.js"
import "./Meaning.css";

export default function Meaning(props) {
    return (
    <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index) {
            return (
                <div key={index}>
             <ul>
                    <li className="definition">
                    {definition.definition}
                    <div className="example">
                   <em>{definition.example}</em> 
                   </div>
                   </li>
                   </ul>
                </div>
            );
        })}
        <Synonyms synonyms={props.meaning.synonyms} />
    </div>
    );
}