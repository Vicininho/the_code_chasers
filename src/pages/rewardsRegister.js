import React, { useState } from "react";
import IkatecLogo from "../assets/Ikatec_Logo.jpg";
import { toast } from "react-toastify";

import * as S from "../styles/participants";
import * as H from "../styles/home";

import { createPrize } from "../services/api";

function RewardsRegister() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmitPrize = async () => {
    if (!name.trim()) return toast.warning("Campo nome obrigatório");
    if (!file) return toast.warning("Campo arquivo obrigatório");

    await createPrize({ name, file });
    toast.success("Premio criado com sucesso");

    setName("");
    setFile(null);
  };

  return (
    <S.Container>
      <img src={IkatecLogo} width="200px" height="120px"></img>

      <h1> Preencha os campos abaixo para cadastrar um prêmio</h1>

      <input type="file" onChange={(event) => setFile(event.target.files[0])} />

      <S.Input
        placeholder="Nome do prêmio"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />

      <H.Button onClick={handleSubmitPrize}> Cadastrar </H.Button>
    </S.Container>
  );
}

export default RewardsRegister;
