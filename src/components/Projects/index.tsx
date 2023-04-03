import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import LanguageContext from "../../hooks/languageContext";
import { Container } from "./styles";

interface RepositoryProps {
  name: string;
  description?: string;
  html_url: string;
  language: string;
}

export function Projects() {
  const [showProjects, setShowProjects] = useState(false);
  const { language } = useContext<any>(LanguageContext);
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

  const list_repos = async () => {
    const response = await axios.get(
      "https://api.github.com/users/casa-henrique/repos"
    );

    setRepositories(response.data);
  };

  useEffect(() => {
    try {
      list_repos();
    } catch (error) {
      console.log(error);
    }
  }, [repositories]);

  return (
    <Container>
      <h2>
        {`${language.projectsTitle} (${repositories.length})`}
        <span>{language.projectsTitleSpan}</span>
      </h2>

      <ul className={showProjects ? "" : "hidden"}>
        {repositories.map((repository) => (
          <li>
            <strong>{repository.name}</strong>
            <p>{repository.description ?? "Descrição"}</p>
            <div>
              {repository.language ? <p>{repository.language}</p> : null}
              <a href={repository.html_url} target="_blank" rel="noreferrer">
                {language.projectsAccessLink}
              </a>
            </div>
          </li>
        ))}
        <div className={showProjects ? "" : "buttonWrapper"} />
        <button onClick={() => setShowProjects(!showProjects)}>
          {showProjects ? (
            <>
              {language.projectsButtonClose}
              <IoIosArrowUp />
            </>
          ) : (
            <>
              {language.projectsButtonOpen}
              <IoIosArrowDown />
            </>
          )}
        </button>
      </ul>
    </Container>
  );
}
