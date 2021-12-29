import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  /* 2rem: espaçamento do topo. 
  Se não colocar esse 1rem quando a tela
  for apresentada em dispositivos menores a logo ficará colada 
  a margin. 12rem espaçamento para baixo. */

  display: flex;
  align-items: center; // Logo e Botão alinhados verticalmente ao centro
  justify-content: space-between; /* Espaço entre a logo e o botão. 
  Ou seja, espaço entre todos os itens que estão dentro do Content */

  // Estilização do Button:

  button {
    font-size: 1rem;
    color: var(--button-color);
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s; /*Ou seja, toda vez que a propriedade filter for alterada, 
    fará uma transição de 0.2s deixando a troca de cores mais suave */

    &:hover {
      // Escurece as cores e a fonte, pacote completo
      filter: brightness(0.9);
    }
  }
`;
