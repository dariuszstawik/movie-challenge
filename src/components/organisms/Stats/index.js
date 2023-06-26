import React from "react";
import { useSelector } from "react-redux";
import Header from "../../atoms/Header";

const Stats = () => {
  const selectedResults = useSelector((state) => state.results);

  const answerStats = (isTrueOrFalse) => {
    return selectedResults.filter(
      ({ isAnswerCorrect }) => isAnswerCorrect === isTrueOrFalse
    ).length;
  };

  const timeStats = () => {
    const correctAnswers = selectedResults.filter(
      ({ isAnswerCorrect }) => isAnswerCorrect === true
    );

    let totalTimeToAnswer = 0;
    correctAnswers.forEach(
      ({ timeToAnswer }) => (totalTimeToAnswer += timeToAnswer)
    );
    return isNaN(totalTimeToAnswer / correctAnswers.length)
      ? ""
      : (totalTimeToAnswer / correctAnswers.length).toFixed(2);
  };

  return (
    <div>
      <Header>Statystyki Twojej gry:</Header>
      <p>Dobre odpowiedzi: {answerStats(true)}</p>
      <p>Błędne odpowiedzi: {answerStats(false)}</p>
      <p>Średni czas na dobrą odpowiedź: {timeStats()} sek.</p>
    </div>
  );
};

export default Stats;
