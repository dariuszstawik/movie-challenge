import { useDispatch, useSelector } from "react-redux";

export const selectMovie = () => {
  const dispatch = useDispatch();
  const selectedRandomNumbers = useSelector((state) => state.randomNumbers);
  dispatch(
    setSelectedMovie(
      moviesData[
        selectedRandomNumbers[Math.floor(Math.random() * randomNumbers.length)]
      ]
    )
  );
};
