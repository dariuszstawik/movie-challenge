import { actionTypes } from "../actions/actionTypes";

const initialState = {
  secondsAmount: 0,
  selectedMovie: 2,
  randomNumbers,
  results: [],
  isResultVisible: false,
  timing: [0, 0],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_SECONDS_AMOUNT:
      return {
        ...state,
        secondsAmount: payload,
      };

    case actionTypes.SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: payload,
      };

    case actionTypes.CHOOSE_RANDOM_NUMBERS:
      return {
        ...state,
        randomNumbers: payload,
      };

    case actionTypes.SET_RESULTS:
      return {
        ...state,
        results: [...results, payload],
      };

    case "SET_IS_RESULT_VISIBLE":
      return {
        ...state,
        isResultVisible: payload,
      };
    case "SET_TIME_RANGE":
      return {
        ...state,
        timing: payload,
      };
  }
};
