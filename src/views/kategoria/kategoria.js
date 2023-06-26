import React from "react";
import Header from "../../components/atoms/Header";
import Paragraph from "../../components/atoms/Paragraph";

const Kategoria = () => {
  return (
    <>
      <Header>Wybierz kategorię - funkcjonalność w przygotowaniu</Header>
      <Paragraph>
        Aktualnie w bazie aplikacji jest 50 polskich filmów (zwiastunów). Z
        czasem baza będzie rozszerzana, a docelowo gracz będzie mógł wybrać
        jedną spośród kilku kategorii (np. Oscary, filmy festiwalowe, komedie).
      </Paragraph>
    </>
  );
};

export default Kategoria;
