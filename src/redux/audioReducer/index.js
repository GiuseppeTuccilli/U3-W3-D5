const initialState = {
  audio: "",
};

const audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_AUDIO":
      return {
        ...state,
        audio: action.payload,
      };

    default:
      return state;
  }
};

export default audioReducer;
