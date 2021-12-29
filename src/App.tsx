import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      {/*Fragment: É um elemento que não tem nenhuma assinatura, é uma tag vazia. Basicamente, é uma div que não vai ser 
      repassada para o HTML da página. Dessa forma, não fazendo qualquer modificação no layout.*/}
      <Header />
      <Dashboard /> {/* Summary está dentro do Dashboard */}
      <GlobalStyle />
    </>
  );
}
