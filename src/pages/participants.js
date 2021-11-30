import React from "react";
import IkatecLogo from "../assets/Ikatec_Logo.jpg";

function Participants(){
    return(
        <div>
            <img src={IkatecLogo} width="200px" height="120px"></img>
            <br/>
            <h1>Bem-vindo à página de participantes!</h1>
            <ul>
                <li>
                    1/1
                </li>
                <li>
                    1/2
                </li>
            </ul>
        </div>
    )
}

export default Participants;