import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsResultVisible, setResults } from "../../../redux/actions";
import Button from "../../atoms/Button";
import { StyledLiItem } from "./StyledLiItem";

const LiItem = ({ movie }) => {
  const selectedMovie = useSelector((state) => state.selectedMovie);
  const dispatch = useDispatch;

  const checkResult = (movie) => {
    let result = movie === selectedMovie.title ? true : false;
    console.log(result);
    dispatch(setResults(result));
    return result;
  };

  return (
    <StyledLiItem>
      <Button
        // movie={movie}
        isInLiElement
        // onClick={(e) => {
        //   checkResult(movie.title);
        //   dispatch(setIsResultVisible(true));
        //   e.target.className = checkResult(movie.title)
        //     ? "winBackground"
        //     : "lossBackground";
        // }}
      >
        {movie.title}
      </Button>
    </StyledLiItem>
  );
};

export default LiItem;
