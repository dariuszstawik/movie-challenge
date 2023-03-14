import { useDispatch, useSelector } from "react-redux";
import { createRandomNumbers } from "../redux/actions";

const selectedRandomNumbers = useSelector((state) => state.randomNumbers);

export const chooseRandomNumbers = () => {
  const dispatch = useDispatch();
  dispatch(
    createRandomNumbers(
      [...selectedRandomNumbers].map(
        (number) => (number = Math.floor(Math.random() * moviesData.length))
      )
    )
  );
};
