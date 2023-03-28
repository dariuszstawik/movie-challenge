import React, { useEffect } from "react";
import Button from "../../atoms/Button";
import Header from "../../atoms/Header";
import {
  StyledInputAndButtonWrapper,
  StyledStartForm,
} from "./StyledStartForm";
import { useDispatch, useSelector } from "react-redux";
import {
  setSecondsAmount,
  setTimeRange,
  setYoutubeVisibility,
} from "../../../redux/actions";
import Input from "../../atoms/Input/";

const StartForm = () => {
  const dispatch = useDispatch();
  const selectedSecondsAmount = useSelector((state) => state.secondsAmount);
  const selectedIsYoutubePlayerVisible = useSelector(
    (state) => state.selectedIsYoutubePlayerVisible
  );

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
    dispatch(setSecondsAmount(Number(e.target.seconds.value)));
    e.target.reset();
  };

  const setTimeRangeFunction = () => {
    const start = Math.floor(Math.random() * 3000);
    const end = start + selectedSecondsAmount;
    dispatch(setTimeRange([start, end]));
  };

  return (
    <StyledStartForm
      // isVisible={selectedIsYoutubePlayerVisible}
      onSubmit={handleStartForm}
    >
      <div>
        <Header>Po ilu sekundach zgadniesz tytuł?</Header>
        <p>
          Wpisz dowolną liczbę sekund - po kliknięciu 'Graj' zobaczysz losowy
          fragment jednego z czterech filmów wymienionych poniżej. Odpowiedzi
          będą klikalne po wyświetleniu wideo.
        </p>
      </div>
      <StyledInputAndButtonWrapper>
        <input id="seconds" name="seconds" placeholder="wpisz___"></input>
        <Button type="submit">Graj</Button>
      </StyledInputAndButtonWrapper>
    </StyledStartForm>
  );
};

export default StartForm;
