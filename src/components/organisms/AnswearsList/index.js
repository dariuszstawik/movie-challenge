import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesData } from "../../../movies-data/moviesData";
import {
  createAnswerOptions,
  selectMovie,
  setIsResultVisible,
  setResults,
  setSecondsAmount,
} from "../../../redux/actions";
import Button from "../../atoms/Button";
import Header from "../../atoms/Header";
import LiItem from "../../molecules/LiItem";
import { StyledAnswearList } from "./StyledAnswearsList";

const AnswearsList = ({ onSelect }) => {
  const selectedAnswerOptions = useSelector((state) => state.answerOptions);
  const selectedSecondsAmount = useSelector((state) => state.secondsAmount);
  const selectedMovie = useSelector((state) => state.selectedMovie);
  const selectedIsResultVisible = useSelector((state) => state.isResultVisible);

  const ref = useRef(null);

  const dispatch = useDispatch();

  const lossButtonClass = "lossBackground";
  const winButtonClass = "winBackground";

  const chooseAnswerOptions = () => {
    const set = new Set();
    while (set.size < selectedAnswerOptions.length) {
      set.add(Math.floor(Math.random() * moviesData.length));
    }

    dispatch(createAnswerOptions([...set]));
  };

  const selectMovieFunction = () => {
    dispatch(
      selectMovie(
        moviesData[
          selectedAnswerOptions[
            Math.floor(Math.random() * selectedAnswerOptions.length)
          ]
        ]
      )
    );
  };

  useEffect(() => {
    chooseAnswerOptions();
  }, []);

  useEffect(() => {
    selectMovieFunction();
  }, [selectedAnswerOptions]);

  useEffect(() => {
    showAnswearOptions();
  }, [selectedMovie]);

  const checkResult = (answer) => {
    const isAnswearCorrect = answer === selectedMovie.title ? true : false;
    const timeToAnswear = selectedSecondsAmount;
    const result = {
      isAnswearCorrect,
      timeToAnswear,
    };
    dispatch(setResults(result));
    return isAnswearCorrect;
  };

  const clearButtonStyle = () => {
    [...ref.current.querySelectorAll("button")].map((li) => {
      if (li.classList.contains(lossButtonClass)) {
        li.classList.remove(lossButtonClass);
      } else if (li.classList.contains(winButtonClass)) {
        li.classList.remove(winButtonClass);
      }
    });
  };

  const nextRound = () => {
    clearButtonStyle();
    dispatch(setSecondsAmount(0));
    chooseAnswerOptions();
    dispatch(setIsResultVisible(false));
    onSelect();
  };

  const showAnswearOptions = () => {
    return (
      <ol type="A" ref={ref}>
        {moviesData.map(({ title }, i) =>
          selectedAnswerOptions.includes(i) ? (
            <li key={i}>
              <button
                className="liButton"
                disabled={selectedIsResultVisible || !selectedSecondsAmount}
                onClick={(e) => {
                  dispatch(setIsResultVisible(true));
                  e.target.className = checkResult(title)
                    ? "liButton winBackground"
                    : "liButton lossBackground";
                }}
              >
                {title}
              </button>
            </li>
          ) : (
            ""
          )
        )}
      </ol>
    );
  };
  return (
    <StyledAnswearList>
      <Header>Twoja odpowiedź:</Header>
      {showAnswearOptions()}
      <h4 className={selectedIsResultVisible ? "isActive" : ""}>
        Prawidłowa odpowiedź: {selectedMovie.title}
      </h4>
      <button className="button" onClick={nextRound}>
        Następne
      </button>
    </StyledAnswearList>
  );
};

export default AnswearsList;
