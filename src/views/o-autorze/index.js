import React from "react";
import Header from "../../components/atoms/Header";
import Paragraph from "../../components/atoms/Paragraph";
import { StyledOAutorze } from "./StyledOAutorze";

const OAutorze = () => {
  return (
    <StyledOAutorze>
      <Header>Dariusz Stawik</Header>

      <Paragraph>
        Junior Frontend Developer. Stack technologiczny: Javascript, React,
        Redux, Next.js, Typescript, Git, Tailwind CSS, Contentful.{" "}
        <a href="https://www.linkedin.com/in/dariusz-stawik/" target="_blank">
          Profil na Linkedin
        </a>{" "}
        <a href="https://www.github.com/dariuszstawik/" target="_blank">
          Github
        </a>
      </Paragraph>

      <Header>Doświadczenie zawodowe </Header>
      <Paragraph>
        Przed przebranżowieniem pracowałem jako specjalista ds. marketingu oraz
        koordynator projektów, głównie w organizacjach pozarządowych.
        Najważniejszy dla mnie projekt:{" "}
        <a href="https://youtu.be/bIdkSyo6OLA" target="_blank">
          {" "}
          Polichrom
        </a>
        . Byłem inicjatorem wdrożenia mechanizmów grywalizacji do wolontariatu
        szkolnego, w projekcie zajmowałem się copywritingiem, obsługą kanałów
        social media oraz kontaktem z mediami, w trzeciej edycji pełniłem rolę
        koordynatora.
      </Paragraph>
      <Header>Współpraca </Header>
      <Paragraph>
        Jestem otwarty zarówno na stałą współpracę, jak też pojedyncze zlecenia.
        Chcesz się ze mną skontaktować, napisz:{" "}
        <a href="mailto:dariusz.stawik@gmail.com">dariusz.stawik@gmail.com</a>.
      </Paragraph>
    </StyledOAutorze>
  );
};

export default OAutorze;
