import React from "react";
import Header from "../../atoms/Header";

const StartForm = () => {
  return (
    <>
      <Header>Po ilu sekundach zgadniesz tytuł?</Header>
      <Input label="Najlepsi zgadują po jednej!" />
      <Button>Graj</Button>
    </>
  );
};

export default StartForm;
