import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesData } from "../../../movies-data/moviesData";
import {
  createRandomNumbers,
  selectMovie,
  setIsResultVisible,
  setResults,
  setSecondsAmount,
} from "../../../redux/actions";
import Button from "../../atoms/Button";
import Header from "../../atoms/Header";
import LiItem from "../../molecules/LiItem";
import { StyledAnswearList } from "./StyledAnswearsList";

const AnswearsList = () => {
  const selectedRandomNumbers = useSelector((state) => state.randomNumbers);
  const selectedSecondsAmount = useSelector((state) => state.secondsAmount);
  const selectedMovie = useSelector((state) => state.selectedMovie);
  const selectedIsResultVisible = useSelector((state) => state.isResultVisible);

  const ref = useRef(null);

  const dispatch = useDispatch();

  const chooseRandomNumbers = () => {
    const set = new Set();
    while (set.size < selectedRandomNumbers.length) {
      set.add(Math.floor(Math.random() * moviesData.length));
    }

    dispatch(createRandomNumbers([...set]));
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

  const checkResult = (movie) => {
    const isAnswearCorrect = movie === selectedMovie.title ? true : false;
    const timeToAnswear = selectedSecondsAmount;
    const result = {
      isAnswearCorrect,
      timeToAnswear,
    };
    dispatch(setResults(result));
    return result;
  };

  const nextRound = () => {
    [...ref.current.querySelectorAll("button")].map((li) => {
      if (li.classList.contains("lossBackground")) {
        li.classList.remove("lossBackground");
      } else if (li.classList.contains("winBackground")) {
        li.classList.remove("winBackground");
      }
    });
    dispatch(setSecondsAmount(0));
    chooseRandomNumbers();
    dispatch(setIsResultVisible(false));
  };

  const showAnswearOptions = () => {
    return (
      <ol type="A" ref={ref}>
        {moviesData.map(({ title }, i) =>
          selectedRandomNumbers.includes(i) ? (
            // <LiItem movie={movie} />
            <li>
              <button
                onClick={(e) => {
                  dispatch(setIsResultVisible(true));
                  e.target.className = checkResult(title)
                    ? "winBackground"
                    : "lossBackground";
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
      {/* <Button onClick={nextRound}>Następne</Button> */}
      <button onClick={nextRound}>Następne</button>
      <h4 className={selectedIsResultVisible ? "isActive" : ""}>
        Prawidłowa odpowiedź: {selectedMovie.title}
      </h4>
    </StyledAnswearList>
  );
};

export default AnswearsList;
