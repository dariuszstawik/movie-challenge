import React, { useEffect } from "react";
import Button from "../../atoms/Button";
import Header from "../../atoms/Header";
import {
  StyledInputAndButtonWrapper,
  StyledStartForm,
} from "./StyledStartForm";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsResultVisible,
  setSecondsAmount,
  setTimeRange,
  setYoutubeVisibility,
} from "../../../redux/actions";

const StartForm = () => {
  const dispatch = useDispatch();
  const selectedSecondsAmount = useSelector((state) => state.secondsAmount);
  const selectedIsYoutubePlayerVisible = useSelector(
    (state) => state.selectedIsYoutubePlayerVisible
  );

  useEffect(() => {
    dispatch(setSecondsAmount(0));
  }, []);

  useEffect(() => {
    dispatch(setIsResultVisible(false));
  }, []);

  const showYoutubePlayer = () => {
    selectedSecondsAmount && dispatch(setYoutubeVisibility(true));
  };

  useEffect(() => {
    setTimeRangeFunction();
  }, [selectedSecondsAmount]);

  useEffect(() => {
    showYoutubePlayer();
  }, [selectedSecondsAmount]);

  const handleStartForm = (e) => {
    e.preventDefault();
    dispatch(
      setSecondsAmount(
        Number(e.target.seconds.value) < 30
          ? Number(e.target.seconds.value)
          : 30
      )
    );
    e.target.reset();
  };

  const setTimeRangeFunction = () => {
    const start = Math.floor(Math.random() * 50) + 15;
    const end = start + selectedSecondsAmount;
    dispatch(setTimeRange([start, end]));
  };

  return (
    <StyledStartForm onSubmit={handleStartForm}>
      <div>
        <Header>Po ilu sekundach zgadniesz tytuł?</Header>
        <p>
          Wpisz obok dowolną liczbę sekund w przedziale od 1 do 30. Po
          kliknięciu 'Graj' zobaczysz losowy fragment jednego z czterech filmów
          (zwiastunów) wymienionych poniżej. Odpowiedzi będą klikalne po
          wyświetleniu wideo.
        </p>
      </div>
      <StyledInputAndButtonWrapper>
        <input
          id="seconds"
          name="seconds"
          placeholder="wpisz liczbę ___"
        ></input>
        <Button type="submit">Graj</Button>
      </StyledInputAndButtonWrapper>
    </StyledStartForm>
  );
};

export default StartForm;
