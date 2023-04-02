import { useContext, useEffect, useState } from "react";
import teste from "../../assets/images/skills/Agile.png";
import LanguageContext from "../../hooks/languageContext";
import ability from "../../utils/skills.json";
import { Container, Table } from "./styles";

interface Itens {
  name: string;
  img: string;
}

interface AbilityProps {
  title: string;
  itens: Itens[];
}

export function Skills() {
  const [skills, setSkills] = useState<AbilityProps[]>([]);
  const { language } = useContext<any>(LanguageContext);

  useEffect(() => {
    setSkills(ability);
  }, []);

  return (
    <Container>
      <h2>
        {language.skillsTitle}
        <span>{language.skillsTitleSpan}</span>
      </h2>
      <img src={teste} alt="" />
      <Table>
        {skills.map((skills) => (
          <table key={skills.title} className="skillsTable">
            <tr>
              <th>{skills.title}</th>
            </tr>
            <tr>
              {skills.itens.map((item: Itens) => (
                <td key={item.name}>
                  <img src={item.img} alt={`Logo ${item.name}`} />
                  <p>{item.name}</p>
                </td>
              ))}
            </tr>
          </table>
        ))}
      </Table>
    </Container>
  );
}
