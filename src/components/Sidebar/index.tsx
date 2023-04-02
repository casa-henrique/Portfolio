import { useContext } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import FotoPerfil from "../../assets/images/fotoPerfil.jpg";
import LanguageContext from "../../hooks/languageContext";
import { Container } from "./styles";

export function Sidebar() {
  const { language } = useContext<any>(LanguageContext);

  return (
    <Container>
      <div className="profile">
        <img src={FotoPerfil} />
        <h2>Henrique Casagrande</h2>
      </div>
      <div className="infosWrapper">
        <div>
          <p>{language.sideBarTechnology}</p>
          <div>
            <FaReact id="reactSvg" />
            <IoLogoJavascript id="jsSvg" />
            <FaNodeJs id="nodeSvg" />
          </div>
        </div>
        <div>
          <p>{language.sideBarNetwork}</p>
          <div className="netWrapper">
            <a href="https://www.instagram.com/casa.henrique/" target="_blank">
              <BsInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/henrique-casa/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a href="https://github.com/casa-henrique" target="_blank">
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
