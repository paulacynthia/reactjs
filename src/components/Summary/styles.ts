import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(
    3,
    1fr
  ); // 1fr 1fr 1fr -> 3 colunas de tamanhos iguais.
  gap: 2rem; // espaçamento em cada item do grid
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block; // Para o strong se comportar como div e receber o margin-top
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem; // Para ocupar um pouco mais de espaço dentro do card
    }

    // A div que tem a classe, tem uma cor de fundo diferente:
    &.highlight-background {
      background-color: var(--green);
      color: var(--button-color);
    }
  }
`;
