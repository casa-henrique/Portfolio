import { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import codificaLogo from "../../assets/images/Logos/codificaLogo.svg";
import happyLogo from "../../assets/images/Logos/happycodeLogo.png";
import zenixLogo from "../../assets/images/Logos/ZenixLogo.svg";
import LanguageContext from "../../hooks/languageContext";
import { Container } from "./styles";

export function Experience() {
  const { language } = useContext<any>(LanguageContext);

  return (
    <Container>
      <h2>
        {language.experienceH2}
        <span>{language.experienceH2Span}</span>
      </h2>

      <VerticalTimeline lineColor="var(--blue-400)">
        <VerticalTimelineElement
          className="vertical-timeline-element--work teste"
          contentStyle={{
            background: "var(--blue-900)",
            color: "#fff",
            marginRight: "20rem",
            fontFamily: "Roboto",
          }}
          dateClassName="dateLeft"
          contentArrowStyle={{ borderRight: "7px solid  var(--blue-900)" }}
          date={language.experienceDateCodificaSenior}
          iconStyle={{
            background: "var(--blue-800)",
            color: "#fff",
          }}
          icon={<img src={codificaLogo} id="logo" />}
        >
          <h3 className="vertical-timeline-element-title">
            {language.experienceCodificaTitleSenior}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {language.experienceCodificaName}
          </h4>
          <p>{language.experienceCodificaSeniorText}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={language.experienceDateCodifica}
          dateClassName="dateRight"
          contentStyle={{
            background: "var(--blue-900)",
            color: "#fff",
            marginLeft: "20rem",
            fontFamily: "Roboto",
          }}
          contentArrowStyle={{ borderRight: "7px solid  var(--blue-900)" }}
          iconStyle={{ background: "var(--blue-800)", color: "#fff" }}
          icon={<img src={codificaLogo} id="logo" />}
        >
          <h3 className="vertical-timeline-element-title">
            {language.experienceCodificaTitle}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {language.experienceCodificaName}
          </h4>
          <p>{language.experienceCodificaText}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={language.experienceDateZenix}
          dateClassName="dateLeft"
          contentStyle={{
            background: "var(--blue-900)",
            color: "#fff",
            marginRight: "20rem",
            fontFamily: "Roboto",
          }}
          contentArrowStyle={{ borderRight: "7px solid  var(--blue-900)" }}
          iconStyle={{ background: "var(--blue-800)", color: "#fff" }}
          icon={<img src={zenixLogo} id="logo" />}
        >
          <h3 className="vertical-timeline-element-title">
            {language.experienceZenixTitle}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {language.experienceZenixName}
          </h4>
          <p>{language.experienceZenixText}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={language.experienceDateHappy}
          dateClassName="dateRight"
          contentStyle={{
            background: "var(--blue-900)",
            color: "#fff",
            marginLeft: "20rem",
            fontFamily: "Roboto",
          }}
          contentArrowStyle={{ borderRight: "7px solid  var(--blue-900)" }}
          iconStyle={{ background: "var(--blue-800)", color: "#fff" }}
          icon={<img src={happyLogo} id="logo" />}
        >
          <h3 className="vertical-timeline-element-title">
            {language.experienceHappyTitle}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {language.experienceHappyName}
          </h4>
          <p>{language.experienceHappyText}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
}
