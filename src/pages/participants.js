import React, { useEffect, useState } from "react";
import IkatecLogo from "../assets/Ikatec_Logo.jpg";
import checkIcon from "../assets/check-square.svg";
import * as S from "../styles/participants";

import { participants } from "../services/api";

function Participants() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function ferch() {
      const response = await participants();

      setData(response);
    }

    ferch();
  }, []);

  return (
    <S.Container>
      <img src={IkatecLogo} width="200px" height="120px"></img>

      <h1> Participantes</h1>
      {data.map((item) => (
        <S.Wrapper>
          <S.Avatar> </S.Avatar>
          <S.Item>
            <div>
              {item.name} - {item.phone}{" "}
            </div>
            {item.status === "done" && <img src={checkIcon} />}
          </S.Item>
        </S.Wrapper>
      ))}

      {data.length === 0 ? "Nenhum participante encontrado" : null}
    </S.Container>
  );
}

export default Participants;
