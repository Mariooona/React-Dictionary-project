import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>

      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
//Add a player link : https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
