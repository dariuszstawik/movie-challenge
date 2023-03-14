import { actionTypes } from "./actionTypes";

export const setSecondsAmount = (payload) => {
  return {
    type: actionTypes.SET_SECONDS_AMOUNT,
    payload,
  };
};

export const selectMovie = (payload) => {
  return {
    type: actionTypes.SELECT_MOVIE,
    payload,
  };
};

export const createRandomNumbers = (payload) => {
  return {
    type: actionTypes.CREATE_RANDOM_NUMBERS,
    payload,
  };
};

export const setResults = (payload) => {
  return {
    type: actionTypes.SET_RESULTS,
    payload,
  };
};

export const setIsResultVisible = (payload) => {
  return {
    type: actionTypes.SET_IS_RESULT_VISIBLE,
    payload,
  };
};

export const setTimeRange = (payload) => {
  return {
    type: actionTypes.SET_TIME_RANGE,
    payload,
  };
};
