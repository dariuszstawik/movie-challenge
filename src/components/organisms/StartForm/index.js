import React, { useEffect } from "react";
import Button from "../../atoms/Button";
import Header from "../../atoms/Header";
import { StyledStartForm } from "./StyledStartForm";
import { useDispatch, useSelector } from "react-redux";
import { setSecondsAmount, setTimeRange } from "../../../redux/actions";
import Input from "../../atoms/Input/";

const StartForm = () => {
  const dispatch = useDispatch();
  const selectedSecondsAmount = useSelector((state) => state.secondsAmount);

  useEffect(() => {
    setTimeRangeFunction();
  }, [selectedSecondsAmount]);

  const handleStartForm = (e) => {
    e.preventDefault();
    console.log(e.target.seconds);
    dispatch(setSecondsAmount(Number(e.target.seconds.value)));
    e.target.reset();
  };

  const setTimeRangeFunction = () => {
    const start = Math.floor(Math.random() * 3000);
    const end = start + selectedSecondsAmount;
    dispatch(setTimeRange([start, end]));
  };

  return (
    <StyledStartForm onSubmit={handleStartForm}>
      <Header>Po ilu sekundach zgadniesz tytuł?</Header>
      <input id="seconds" name="seconds"></input>
      <Button type="submit">Graj</Button>
    </StyledStartForm>
  );
};

export default StartForm;
