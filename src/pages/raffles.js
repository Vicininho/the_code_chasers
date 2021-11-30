import React from "react";
import IkatecLogo from "../assets/Ikatec_Logo.jpg";

function Raffles(){
    return(
        <div>
            <img src={IkatecLogo} width="200px" height="120px"></img>
            <br/>
            <h1>Bem-vindo(a)! Acompanhe por aqui o andamento do sorteio!</h1>
        </div>
    )
}

export default Raffles;