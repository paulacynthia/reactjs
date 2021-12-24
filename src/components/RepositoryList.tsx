import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  /* Dentro do useEffect foi feito um fetch na api do github para buscar os 
  repositórios, quando esse fetch devolver uma resposta, ela será convertida 
  para JSON. E quando a resposta para JSON terminar de ser convertida, 
  teremos os dados do repositório. O próximo passo foi pegar o data e 
  salvar ele dentro do setRepositories. */

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios:</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
