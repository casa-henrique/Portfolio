import { useContext } from "react";
import { Chrono } from "react-chrono";
import LanguageContext from "../../hooks/languageContext";
import { Container } from "./styles";

export function Experience() {
  const { language } = useContext<any>(LanguageContext);

  const itemsPt = [
    {
      title: "Janeiro 2022 - Presente",
      cardTitle: "Dev Full-Stack Sênior",
      cardSubtitle: "Codifica",
      cardDetailedText:
        "Atualmente estou desenvolvendo e manutenindo diversos projetos utilizando React e Node. Criação e aplicação de cursos profissionalizante para mais de 300 alunos ao vivo.",
    },
    {
      title: "Junho 2022 - Dezembro 2022",
      cardTitle: "Dev Full-Stack Júnior",
      cardSubtitle: "Codifica",
      cardDetailedText:
        "Trabalhei com o desenvolvimento de 4 projetos internos e diversas ferramentas para uso. Desenvolvi ementas de cursos profissionalizantes na área de programação. Gestão de e-mail marketing.",
    },
    {
      title: "Junho 2020 - Dezembro 2022",
      cardTitle: "Dev Front-End Júnior",
      cardSubtitle: "ZenixTech",
      cardDetailedText:
        "Administrador; Product Owner; Desenvolvedor Front-end; Sites e Lojas em WordPress; Práticas em SEO;",
    },
    {
      title: "Abril 2019 - Março 2021",
      cardTitle: "Professor",
      cardSubtitle: "Happy Code",
      cardDetailedText:
        "Games 2D e 3D ( Construct 2, RPGMaker e Unity); Produção de conteúdo (Blender e Filmora); Modelagem 3D (Blender); Maker (Arduino, Micro:bits, SamLabs); Aplicativo (MIT App Inventor);",
    },
  ];
  const itemsEn = [
    {
      title: "January 2022 - Present",
      cardTitle: "Dev Full-Stack Senior",
      cardSubtitle: "Codifica",
      cardDetailedText:
        "I'm currently developing and maintaining several projects using React and Node. Creation and application of professional courses for more than 300 live students.",
    },
    {
      title: "June 2022 - December 2022",
      cardTitle: "Dev Full-Stack Junior",
      cardSubtitle: "Codifica",
      cardDetailedText:
        "I worked with the development of 4 internal projects and several tools for use. I developed professional courses in the area of programming. And email marketing management.",
    },
    {
      title: "June 2020 - December 2022",
      cardTitle: "Dev Front-End Junior",
      cardSubtitle: "ZenixTech",
      cardDetailedText:
        "Administrator; Product Owner; Dev Front-end; Websites e stores in WordPress; Practices in SEO;",
    },
    {
      title: "April 2019 - March 2021",
      cardTitle: "Teacher",
      cardSubtitle: "Happy Code",
      cardDetailedText:
        "Games 2D e 3D ( Construct 2, RPGMaker and Unity); Content production (Blender and Filmora); Modelagem 3D (Blender); Maker (Arduino, Micro:bits and SamLabs); App (MIT App Inventor);",
    },
  ];

  function Traduction() {
    if (language.language === "pt-br") {
      return (
        <Chrono
          items={itemsPt}
          mode="VERTICAL_ALTERNATING"
          enableBreakPoint
          verticalBreakPoint={400}
          hideControls
          useReadMore={false}
          classNames={{
            card: "my-card",
            cardMedia: "my-card-media",
            cardSubTitle: "my-card-subtitle",
            cardText: "my-card-text",
            cardTitle: "my-card-title",
            controls: "my-controls",
            title: "my-title",
          }}
          theme={{
            primary: "var(--blue-400)",
            secondary: "var(--blue-400)",
            cardBgColor: "var(--blue-900)",
            titleColor: "var(--white)",
            titleColorActive: "var(--white)",
          }}
        />
      );
    } else {
      return (
        <Chrono
          items={itemsEn}
          mode="VERTICAL_ALTERNATING"
          enableBreakPoint
          verticalBreakPoint={400}
          hideControls
          classNames={{
            card: "my-card",
            cardMedia: "my-card-media",
            cardSubTitle: "my-card-subtitle",
            cardText: "my-card-text",
            cardTitle: "my-card-title",
            controls: "my-controls",
            title: "my-title",
          }}
          theme={{
            primary: "var(--blue-400)",
            secondary: "var(--blue-400)",
            cardBgColor: "var(--blue-900)",
            titleColor: "var(--white)",
            titleColorActive: "var(--white)",
          }}
        />
      );
    }
  }

  return (
    <Container>
      <h2>
        {language.experienceH2}
        <span>{language.experienceH2Span}</span>
      </h2>

      <Traduction />
    </Container>
  );
}
