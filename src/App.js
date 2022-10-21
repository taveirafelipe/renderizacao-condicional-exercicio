import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [valorCondicional, setValorCondicional] = useState(1)


  const mudarTela = (valor) => {
    setValorCondicional(valor)
  }

  // Resolução do exercício de fixação
  const renderizaTela = () =>{
    switch(valorCondicional){
      case 1:
        return <TelaLogin mudarTela={mudarTela}/>;
      case 2:
        return  <TelaCadastro mudarTela={mudarTela}/>;
      case 3:
        return  <TelaUsuarioCadastrado/>
    }
  }


  return (
    <MainContainer >
      <GlobalStyled />

      {/* Exercício de fixação, ultima parte */}
      {renderizaTela()}

      {/* Primeiro exercício de prática guiada, onde mostra uma tela entre duas possiveis telas. */}
      {/* {valorCondicional === 1? <TelaLogin mudarTela={mudarTela}/> : <TelaCadastro mudarTela={mudarTela}/>} */}

      {/* Ao chegar no exercício de fixação, mostrar/falar que um ternário dentro de outro pode ser confuso
      e mostrar/falar que não é uma boa prática. 
      Exemplo de ternario dentro de outro ternario,*/}
      {/* {valorCondicional === 1? <TelaLogin mudarTela={mudarTela}/> :valorCondicional === 2 ? <TelaCadastro mudarTela={mudarTela}/> : <TelaUsuarioCadastrado/>} */}


      {/* Ao abrir o arquivo vai está sendo renderizado desse jeito */}
      {/* <TelaLogin mudarTela={mudarTela}/>
      <TelaCadastro mudarTela={mudarTela}/> */}

    </MainContainer>
  );
}

export default App;