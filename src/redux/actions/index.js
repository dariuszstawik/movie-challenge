import { actionTypes } from "./actionTypes";

export const toggleMobileMenu = () => {
  return {
    type: actionTypes.TOGGLE_MOBILE_MENU,
  };
};

export const closeMobileMenu = () => {
  return {
    type: actionTypes.CLOSE_MOBILE_MENU,
  };
};

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

export const createAnswerOptions = (payload) => {
  return {
    type: actionTypes.CREATE_ANSWER_OPTIONS,
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

export const setYoutubeVisibility = (payload) => {
  return {
    type: actionTypes.SET_IS_YOUTUBE_PLAYER_VISIBLE,
    payload,
  };
};
