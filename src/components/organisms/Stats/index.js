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
    const correctAnswers = selectedResults.filter(
      ({ isAnswearCorrect }) => isAnswearCorrect === true
    );

    let totalTimeToAnswer = 0;
    correctAnswers.forEach(
      ({ timeToAnswear }) => (totalTimeToAnswer += timeToAnswear)
    );
    return isNaN(totalTimeToAnswer / correctAnswers.length)
      ? ""
      : (totalTimeToAnswer / correctAnswers.length).toFixed(2);
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
