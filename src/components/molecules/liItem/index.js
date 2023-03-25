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
    dispatch(setResults(result));
    return result;
  };

  return (
    <StyledLiItem>
      <Button isInLiElement>{movie.title}</Button>
    </StyledLiItem>
  );
};

export default LiItem;
