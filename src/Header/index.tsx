import logoImg from "../assets/logo.svg";

import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      {/*Lembrete: logoImg está entre chaves porque é 
      assim que representamos um arquivo JS no HTML!*/}
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
