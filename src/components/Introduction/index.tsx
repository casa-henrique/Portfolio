import { useContext } from "react";
import mobile from "../../assets/images/app-development.png";
import backend from "../../assets/images/backend-development.png";
import web from "../../assets/images/web-development.png";
import LanguageContext from "../../hooks/languageContext";
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
        <div>
          <img src={web} alt="" />
          <p>{language.introductionWebImg}</p>
        </div>
        <div>
          <img src={backend} alt="" />
          <p>{language.introductionBackImg}</p>
        </div>
        <div>
          <img src={mobile} alt="" />
          <p>{language.introductionMobImg}</p>
        </div>
      </div>
    </Container>
  );
}
