import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form>
        <label>
          <spam>Nome:</spam>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do Usuário"
          />
        </label>
        <label>
          <spam>E-mail:</spam>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do Usuário"
          />
        </label>
        <label>
          <spam>Senha:</spam>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua Senha"
          />
        </label>
        <label>
          <spam>Confirmação de Senha:</spam>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua Senha"
          />
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
