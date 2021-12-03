import React from "react";
import IkatecLogo from "../assets/Ikatec_Logo.jpg";

function Results() {
  return (
    <div>
      <img src={IkatecLogo} width="200px" height="120px"></img>
      <br />
      <h1>Acompanhe por aqui o andamento do sorteio!</h1>
      <ul>
        <li>1/1</li>
        <li>1/2</li>
      </ul>
    </div>
  );
}

export default Results;
