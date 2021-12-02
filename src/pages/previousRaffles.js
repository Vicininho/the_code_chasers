import React, { useEffect, useState } from "react";
import IkatecLogo from "../assets/Ikatec_Logo.jpg";

import * as S from "../styles/participants";

import { sorts } from "../services/api";

function PreviousRaffles() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function ferch() {
      const response = await sorts();

      setData(response);
    }

    ferch();
  }, []);

  return (
    <S.Container>
      <img src={IkatecLogo} width="200px" height="120px"></img>

      <h1> Sorteios anteriores </h1>
      {data.map((item) => (
        <S.Wrapper>
          <S.Item>
            {" "}
            #{item.id} - {item.contacts.name} ({item.contacts.phone}) -{" "}
            {item.prizes.name}{" "}
          </S.Item>
        </S.Wrapper>
      ))}

      {data.length === 0 ? "Nenhum sorteio encontrado" : null}
    </S.Container>
  );
}

export default PreviousRaffles;
