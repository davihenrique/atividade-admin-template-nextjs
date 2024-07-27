/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeAtencao } from "../components/icons";

export default function Autenticacao() {
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);

  function exibirError(msg, tempoEmSegundos = 5) {
    setError(msg);
    setTimeout(() => setError(null), tempoEmSegundos * 1000);
  }

  function submeter() {
    if (modo === "login") {
      console.log("login");
      exibirError("Ocorreu um erro no login", 2);
    } else {
      console.log("cadastrar");
      exibirError("Ocorreu um erro no Cadastrar");
    }
  }

  return (
    <div
      className={`
    flex h-screen items-center justify-center
    `}
    >
      <div className={"hidden md:block md:w-1/2 lg:w-2/3"}>
        <img
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"
          alt="Imagem da Tela de Autenticação"
          className={`h-screen w-full object-cover`}
        />
      </div>

      <div className={"m-10 w-full md:w-1/2 lg:w-1/3"}>
        <h1
          className={`
        text-3xl font-bold mb-5
        `}
        >
          {modo === "login"
            ? "Entre com a sua Conta"
            : "Cadastre-se na Plataforma"}
        </h1>

        {error ? (
          <div
            className={`
            flex items-center
                bg-red-400 text-white py-3 px-5 my-2
                border border-red-700 rounded-lg
                `}
          >
            {IconeAtencao()}
            <span className={`ml-3`}>{error}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          label="Email"
          valor={email}
          valorMudou={setEmail}
          tipo="email"
          obrigatorio
        />

        <AuthInput
          label="Senha"
          valor={senha}
          valorMudou={setSenha}
          tipo="password"
          obrigatorio
        />

        <button
          onClick={submeter}
          className={`
    w-full bg-indigo-500 hover:bg-indigo-400
    text-white rounded-lg px-4 py-3 mt-6
    
    `}
        >
          {modo === "login" ? "Entrar" : "Cadrastar"}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button
          onClick={submeter}
          className={`
    w-full bg-red-500 hover:bg-red-400
    text-white rounded-lg px-4 py-3
    
    `}
        >
          Entrar com Google
        </button>

        {modo === "login" ? (
          <p className={`mt-8`}>
            {" "}
            Novo por aqui ?
            <a
              onClick={() => setModo("cadastro")}
              className={`
            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              {" "}
              Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className={`mt-8`}>
            {" "}
            Já faz parte da nossa comunidade?
            <a
              onClick={() => setModo("login")}
              className={`
            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              {" "}
              Entre com suas credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
}