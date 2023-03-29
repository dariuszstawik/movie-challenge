import React from "react";
import Header from "../../components/atoms/Header";
import Paragraph from "../../components/atoms/Paragraph";

const Zasady = () => {
  return (
    <div>
      <Header>O aplikacji</Header>
      <p className="paragraph">
        "Co to za film" to quiz filmowy nawiązujący formą do popularnego
        teleturnieju muzycznego.
      </p>
      <Header>Jak grać?</Header>
      <Paragraph>
        Na stronie głównej zobaczysz prośbę o podanie liczby sekund oraz cztery
        tytuły. Po kliknięciu "Graj" wyświetli się losowy fragment jednego z
        czterech filmów (np. jeśli wpiszesz "10", zobaczysz dziesięciosekundowe
        wideo). Jeżeli korzystasz z alikacji na laptopie lub komputerze
        stacjonarnym, odtwarzanie rozpocznie się automatycznie, na urządzeniach
        mobilnych trzeba kliknąć play.
      </Paragraph>
      <Paragraph>
        Po obejrzeniu zaznacz swoją odpowiedź. Po kliknięciu "następne"
        przejdziesz do kolejnego pytania. W zakładce "statystyki" znajdziesz
        liczbę poprawnych i błędnych odpowiedzi oraz średni czas na właściwą
        odpowiedź. Jeżeli chcesz rozpocząć rozgrywkę od nowa - odśwież stronę.
      </Paragraph>
    </div>
  );
};

export default Zasady;
