import { useContext, useEffect, useState } from "react";
import { useScrollContainer } from "react-indiana-drag-scroll";
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
  const scrollContainer = useScrollContainer();

  useEffect(() => {
    setSkills(ability);
  }, []);

  return (
    <SkillsContainer>
      <h2>{language.skillsTitle}</h2>
      <SkillsTable ref={scrollContainer.ref}>
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
