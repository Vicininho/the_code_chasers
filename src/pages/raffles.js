import React, { useEffect, useState } from "react";
import IkatecLogo from "../assets/Ikatec_Logo.jpg";
import * as S from "../styles/participants";
import * as H from "../styles/home";

import Loading from "../components/Loading";

import { createSorts } from "../services/api";

function Raffles() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCreateSort = async () => {
    setResult(null);

    const response = await createSorts();

    if (response?.code === 2) {
      alert("Nenhum premio disponivel");
      return;
    }

    if (response?.code === 1) {
      alert("Nenhum partipante disponivel");
      return;
    }

    setLoading(true);
    setResult(response);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <S.Container>
      <img src={IkatecLogo} width="200px" height="120px"></img>
      <br />
      <h1>Vamos sortear</h1>

      <H.Button onClick={handleCreateSort}> SORTEAR AGORA </H.Button>

      {loading && (
        <div style={{ margin: "30px 0" }}>
          <Loading />
        </div>
      )}

      {result && !loading && (
        <S.ContainerResult>
          <p> Número do sorteio: {result.id} </p>
          <p>
            Participante: <h1>{result.contacts.id}</h1> {result.contacts.name} -
            ...
            {result.contacts.phone.slice(9)}
          </p>
          <p>
            Prêmio: {result.prizes.name}
            <img src={result.prizes.url} width="50px" height="50ppx" />
          </p>
        </S.ContainerResult>
      )}
    </S.Container>
  );
}

export default Raffles;
