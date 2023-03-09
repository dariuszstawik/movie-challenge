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
    case "SET_SECONDS_AMOUNT":
      return {
        ...state,
        secondsAmount: payload,
      };

    case "SELECT_MOVIE":
      return {
        ...state,
        selectedMovie: payload,
      };
    case "CHOOSE_RANDOM_NUMBERS":
      return {
        ...state,
        randomNumbers: payload,
      };

    case "SET_RESULTS":
      return {
        ...state,
        results: [...results, payload],
      };

    case "SET_RESULTS":
      return {
        ...state,
        results: [...results, payload],
      };
    case "SET_IS_RESULT_VISIBLE":
      return {
        ...state,
        isResultVisible: payload,
      };
    case "SET_TIMING":
      return {
        ...state,
        timing: payload,
      };
  }
};
