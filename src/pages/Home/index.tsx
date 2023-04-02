import { Experience } from "../../components/Experience";
import { Header } from "../../components/Header";
import { Introduction } from "../../components/Introduction";
import { Projects } from "../../components/Projects";
import { Skills } from "../../components/Skills";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Introduction />
      <Experience />
      <Skills />
      <Projects />
    </Container>
  );
}
