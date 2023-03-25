import { actionTypes } from "../actions/actionTypes";

const initialState = {
  isMobileMenuActive: false,
  secondsAmount: 0,
  selectedMovie: {},
  answerOptions: [0, 0, 0, 0],
  results: [],
  isResultVisible: false,
  timeRange: [0, 0],
  isYoutubePlayerVisible: false,
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.TOGGLE_MOBILE_MENU:
      return {
        ...state,
        isMobileMenuActive: !state.isMobileMenuActive,
      };

    case actionTypes.CLOSE_MOBILE_MENU:
      return {
        ...state,
        isMobileMenuActive: false,
      };

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

    case actionTypes.CREATE_ANSWER_OPTIONS:
      return {
        ...state,
        answerOptions: payload,
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
    case actionTypes.SET_IS_YOUTUBE_PLAYER_VISIBLE:
      return {
        ...state,
        isYoutubePlayerVisible: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
