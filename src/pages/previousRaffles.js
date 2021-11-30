import React from "react";
import IkatecLogo from "../assets/Ikatec_Logo.jpg";

function PreviousRaffles() {
  return (
    <div>
      <img src={IkatecLogo} width="200px" height="120px"></img>
      <br />
      <h1>Sorteios anteriores!</h1>
      <ul>
        <li>1/1</li>
        <li>1/2</li>
      </ul>
    </div>
  );
}

export default PreviousRaffles;