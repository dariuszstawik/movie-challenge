import React from "react";
import Header from "../../components/atoms/Header";
import Paragraph from "../../components/atoms/Paragraph";

const Kategoria = () => {
  return (
    <>
      <Header>Wybierz kategorię - funkcjonalność w przygotowaniu</Header>
      <Paragraph>
        Aktualnie w bazie aplikacji jest ok. 30 filmów - starsze polskie
        produkcje, które są udostępnione w całości na Youtube. Docelowo gracz
        będzie mógł wybrać jedną spośród kilku kategorii (np. Oscary, filmy
        festiwalowe, komedie). Podstawą w tym przypadku będą nie całe filmy, a
        zwiastuny. Funkcjonalność i baza są aktualnie przygotowywane.
      </Paragraph>
    </>
  );
};

export default Kategoria;
