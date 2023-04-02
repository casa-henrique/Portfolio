import { useContext, useEffect, useState } from "react";
import EnUS from "../../assets/images/en-us-icon.png";
import PtBr from "../../assets/images/pt-br-icon.png";
import LanguageContext from "../../hooks/languageContext";
import enUsText from "../../languages/enUs.json";
import ptBrText from "../../languages/ptBr.json";
import { Container } from "./styles";

export function Header() {
  const [languageSelected, setLanguageSelected] = useState(false); //false = Pt-Br, true = En-Us
  const { language, setLanguage } = useContext<any>(LanguageContext);

  useEffect(() => {
    if (languageSelected) {
      setLanguage(enUsText);
    } else {
      setLanguage(ptBrText);
    }
  }, [languageSelected]);

  return (
    <Container>
      <div>
        <img
          src={PtBr}
          className={!languageSelected ? "selected" : ""}
          onClick={() => setLanguageSelected(false)}
        />
        <img
          src={EnUS}
          className={languageSelected ? "selected" : ""}
          onClick={() => setLanguageSelected(true)}
        />
      </div>
      <h1>
        {language.headerH1Hi} <span>Henrique</span> <br />{" "}
        {language.headerH1Role}
      </h1>
    </Container>
  );
}
