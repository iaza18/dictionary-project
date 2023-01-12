import React from "react";

export default function Synonyms(props) {
   if (props.synonyms.length !== 0) {
    return (
        <div className="Synonyms">
            <hr />
            <ul>
        {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
        })}
        </ul>
        </div>
    );
   } else {
       return null; 
   }
}