import { useContext } from "react";
import mobile from "../../assets/images/app-development.png";
import backend from "../../assets/images/backend-development.png";
import web from "../../assets/images/web-development.png";
import LanguageContext from "../../hooks/languageContext";
import { Card } from "../Card";
import { Container } from "./styles";

export function Introduction() {
  const { language } = useContext<any>(LanguageContext);

  return (
    <Container>
      <h2>
        <span>{language.introductionIntro}</span>
        {language.introductionObjective}
      </h2>
      <p>{language.introductionObjectiveText}</p>
      <div>
        <Card img={web} title={language.introductionWebImg} />
        <Card img={backend} title={language.introductionBackImg} />
        <Card img={mobile} title={language.introductionMobImg} />
      </div>
    </Container>
  );
}
