const initialState = {
  nuove: [],
};

const nuoveReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NUOVE":
      return {
        ...state,
        nuove: action.payload,
      };

    default:
      return state;
  }
};

export default nuoveReducer;
