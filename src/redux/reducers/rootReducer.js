import { actionTypes } from "../actions/actionTypes";

const initialState = {
  secondsAmount: 0,
  selectedMovie: {},
  randomNumbers: [0, 0, 0, 0],
  results: [],
  isResultVisible: false,
  timeRange: [0, 0],
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

    case actionTypes.CREATE_RANDOM_NUMBERS:
      return {
        ...state,
        randomNumbers: payload,
      };

    case actionTypes.SET_RESULTS:
      return {
        ...state,
        results: [...state.results, payload],
      };

    case actionTypes.SET_IS_RESULT_VISIBLE:
      return {
        ...state,
        isResultVisible: payload,
      };
    case actionTypes.SET_TIME_RANGE:
      return {
        ...state,
        timeRange: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
