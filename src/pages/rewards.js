import React, { useEffect, useState } from "react";
import IkatecLogo from "../assets/Ikatec_Logo.jpg";
import checkIcon from "../assets/check-square.svg";

import * as S from "../styles/participants";

import { prizes } from "../services/api";

function Rewards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function ferch() {
      const response = await prizes();

      setData(response);
    }

    ferch();
  }, []);

  return (
    <S.Container>
      <img src={IkatecLogo} width="200px" height="120px"></img>

      <h1> Prêmios </h1>
      {data.map((item) => (
        <S.Wrapper>
          <S.Item>
            {" "}
            <div>{item.name} </div>
            {item.status === "done" && <img src={checkIcon} />}{" "}
          </S.Item>
          <img
            src={item.url}
            style={{ marginLeft: 15 }}
            width="50px"
            height="50px"
          />
        </S.Wrapper>
      ))}

      {data.length === 0 ? "Nenhum premio encontrado" : null}
    </S.Container>
  );
}

export default Rewards;
