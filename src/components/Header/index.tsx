import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void /*Ou seja, a função não recebe nenhum parâmetro e nem retorna nada;*/;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      {/*Lembrete: logoImg está entre chaves porque é 
      assim que representamos um arquivo JS no HTML!*/}

      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
