import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  function trocarValor() {
    setOpenMenu(!openMenu);
  }

  return (
    <div>
      <button onClick={trocarValor}>
        {openMenu === true ? "Fechar" : "Abrir"}
      </button>
      {openMenu === true ? (
        <div>
          <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/participants">Participantes</Link>
            </li>
            <li>
                <Link to="/rewards">Prêmios</Link>
            </li>
            <li>
                <Link to="/rewardsRegister">Cadastro de prêmios</Link>
            </li>
            <li>
                <Link to="/raffles">Sorteios</Link>
            </li>
            <li>
                <Link to="/previousRaffles">Sorteios anteriores</Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Menu;
