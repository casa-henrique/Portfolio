import { useContext, useEffect, useState } from "react";
import LanguageContext from "../../hooks/languageContext";
import ability from "../../utils/skills.json";
import { SkillsContainer, SkillsTable } from "./styles";

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
    <SkillsContainer>
      <h2>
        {language.skillsTitle}
        <span>{language.skillsTitleSpan}</span>
      </h2>
      <SkillsTable>
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
      </SkillsTable>
    </SkillsContainer>
  );
}
