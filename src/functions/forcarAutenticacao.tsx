/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import loading from "../../public/imagens/loading.gif";
import route from "next/router";
import Head from "next/head";
import useAuth from "../data/hook/useAuth";

export default function forcarAutenticacao(jsx) {
  const { usuario, carregando } = useAuth();

  function renderizarConteudo() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            if(!document.cookie?.includes("admin-template-cod3r-auth")){
                window.location.hrref= "/autenticacao"
            }
            `,
            }}
          />
        </Head>
        {jsx}
      </>
    );
  }

  function renderizarCarregando() {
    return (
      <div
        className={`
                flex justify-center items-center h-screen
            `}
      >
        <Image src={loading} alt="Loading" />
      </div>
    );
  }

  if (!carregando && usuario?.email) {
    return renderizarConteudo();
  } else if (carregando) {
    return renderizarCarregando();
  } else {
    route.push("/autenticacao");
    return null;
  }
}
