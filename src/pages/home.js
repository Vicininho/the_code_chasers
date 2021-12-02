import React from "react";
import IkatecLogo from "../assets/Ikatec_Logo.jpg";

import * as S from "../styles/home";

function Home() {
  return (
    <S.Container>
      <img src={IkatecLogo} width="200px" height="120px"></img>
      <br />
      <h1>Bem-vindo ao sorteador "The Code Chasers"!</h1>
      <a>
        Esse projeto foi desenvolvido com o intuito de facilitar o processo de
        organização de sorteios, permitindo <br /> <br /> que o usuário monitore
        os sorteios já realizados, acesse a lista de participantes, categorize
        os participantes já premiados, <br />
        <br /> veja a lista de recompensas e adicione novos prêmios conforme
        necessário!
      </a>
      <br />
      <br />
      <form action="https://wa.me/5514998022422?text=Ol%C3%A1%2C%20quero%20participar%20do%20sorteio!">
        <S.Button type="submit">Quero participar!</S.Button>
      </form>
    </S.Container>
  );
}

export default Home;
