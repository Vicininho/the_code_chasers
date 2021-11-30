import React from "react";
import IkatecLogo from "../assets/Ikatec_Logo.jpg";

function Home(){
    return(
        <div>
            <img src={IkatecLogo} width="200px" height="120px"></img>
            <br/>
            <h1>Bem-vindo à home!</h1>
            <form action="https://wa.me/5514988197797?text=Ol%C3%A1%2C%20quero%20participar%20do%20sorteio!">
                <button type="submit">Quero participar!</button>
            </form>
        </div>
    )
}

export default Home;