import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import menuIcon from "../assets/menu.svg";
import giftIcon from "../assets/gift.svg";
import listIcon from "../assets/list.svg";
import usersIcon from "../assets/users.svg";
import homeIcon from "../assets/home.svg";
import closeIcon from "../assets/x.svg";
import awardIcon from "../assets/award.svg";
import shuffleIcon from "../assets/shuffle.svg";

import * as S from "../styles/menu";

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  function handleToggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <div>
      {!openMenu && (
        <S.ButtonOpen onClick={handleToggleMenu}>
          <img src={menuIcon} />
        </S.ButtonOpen>
      )}
      {openMenu === true ? (
        <S.Container>
          {openMenu && (
            <S.ButtonClose onClick={handleToggleMenu}>
              {" "}
              <img src={closeIcon} />
            </S.ButtonClose>
          )}
          <ul>
            <S.Item onClick={handleToggleMenu}>
              <img src={homeIcon} />
              <Link to="/">Home</Link>
            </S.Item>
            <S.Item onClick={handleToggleMenu}>
              <img src={usersIcon} />
              <Link to="/participants">Participantes</Link>
            </S.Item>
            <S.Item onClick={handleToggleMenu}>
              <img src={giftIcon} />
              <Link to="/rewards">Prêmios</Link>
            </S.Item>
            <S.Item onClick={handleToggleMenu}>
              <img src={awardIcon} />
              <Link to="/rewardsRegister">Cadastro de prêmios</Link>
            </S.Item>

            <S.Item onClick={handleToggleMenu}>
              <img src={listIcon} />
              <Link to="/previousRaffles">Sorteios anteriores</Link>
            </S.Item>

            <S.Item onClick={handleToggleMenu}>
              <img src={shuffleIcon} />
              <Link to="/raffles">Sortear</Link>
            </S.Item>
          </ul>
        </S.Container>
      ) : null}
    </div>
  );
}

export default Menu;
