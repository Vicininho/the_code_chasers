import React from "react";
import IkatecLogo from "../assets/Ikatec_Logo.jpg";

function RewardsRegister() {
  return (
    <div>
      <img src={IkatecLogo} width="200px" height="120px"></img>
      <br />
      <h1>Preencha os campos abaixo para cadastrar um prêmio:</h1>
      <form>
        <label for="txt">Nome do prêmio:</label> &nbsp;
        <input
          type="text"
          id="txt"
          name="txt"
          placeholder="Insira aqui o nome do prêmio"
        ></input>
        <br />
        <br />
        <label for="img">Image:</label> &nbsp;
        <input type="file" id="img" name="img" accept="image/*"></input>
        <br />
        <br />
        <input type="submit" value="Salvar"></input>
      </form>
    </div>
  );
}

export default RewardsRegister;
