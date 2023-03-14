import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesData } from "../../../movies-data/moviesData";
import { createRandomNumbers, selectMovie } from "../../../redux/actions";
import Button from "../../atoms/Button";
import Header from "../../atoms/Header";
import LiItem from "../../molecules/LiItem";

const AnswearsList = () => {
  const selectedRandomNumbers = useSelector((state) => state.randomNumbers);
  const selectedSecondsAmount = useSelector((state) => state.secondsAmount);
  const selectedMovie = useSelector((state) => state.selectedMovie);

  const dispatch = useDispatch();

  const chooseRandomNumbers = () => {
    dispatch(
      createRandomNumbers(
        [...selectedRandomNumbers].map(
          (number) => (number = Math.floor(Math.random() * moviesData.length))
        )
      )
    );
  };

  const selectMovieFunction = () => {
    dispatch(
      selectMovie(
        moviesData[
          selectedRandomNumbers[
            Math.floor(Math.random() * selectedRandomNumbers.length)
          ]
        ]
      )
    );
  };

  useEffect(() => {
    chooseRandomNumbers();
  }, []);

  useEffect(() => {
    selectMovieFunction();
  }, [selectedRandomNumbers]);

  useEffect(() => {
    showAnswearOptions();
  }, [selectedMovie]);

  const showAnswearOptions = () => {
    return moviesData.map(({ title }, i) =>
      selectedRandomNumbers.includes(i) ? <LiItem>{title}</LiItem> : ""
    );
  };
  return (
    <>
      <Header>Twoja odpowiedź:</Header>
      {showAnswearOptions()}
      <Button>Następne</Button>
    </>
  );
};

export default AnswearsList;
