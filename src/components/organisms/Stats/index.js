import React from "react";
import { useSelector } from "react-redux";
import Header from "../../atoms/Header";
import { StyledStats } from "./StyledStats";

const Stats = () => {
  const selectedResults = useSelector((state) => state.results);

  const answearStats = (isTrueOrFalse) => {
    return selectedResults.filter(
      ({ isAnswearCorrect }) => isAnswearCorrect === isTrueOrFalse
    ).length;
  };

  const timeStats = () => {
    const correctAnswearsArray = selectedResults.filter(
      ({ isAnswearCorrect }) => isAnswearCorrect === true
    );
    let sum = 0;
    correctAnswearsArray.forEach(({ timeToAnswear }) => (sum += timeToAnswear));
    return isNaN(sum / correctAnswearsArray.length)
      ? ""
      : sum / correctAnswearsArray.length;
  };

  return (
    <StyledStats>
      <Header>Statystyki Twojej gry:</Header>
      <p>Dobre odpowiedzi: {answearStats(true)}</p>
      <p>Błędne odpowiedzi: {answearStats(false)}</p>
      <p>Średni czas na dobrą odpowiedź: {timeStats()} sek.</p>
    </StyledStats>
  );
};

export default Stats;
