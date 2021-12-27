import { Header } from "./Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      {/*Fragment: É um elemento que não tem nenhuma assinatura, é uma tag vazia. Basicamente, é uma div que não vai ser 
      repassada para o HTML da página. Dessa forma, não fazendo qualquer modificação no layout.*/}
      <Header />
      <GlobalStyle />
    </>
  );
}
