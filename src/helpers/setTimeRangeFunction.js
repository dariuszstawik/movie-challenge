import { useDispatch } from "react-redux";
import { setTimeRange } from "../redux/actions";

export const setTimeRangeFunction = () => {
  const dispatch = useDispatch();
  const start = Math.floor(Math.random() * 3000);
  const end = start + secondsAmount;
  dispatch(setTimeRange([start, end]));
};
