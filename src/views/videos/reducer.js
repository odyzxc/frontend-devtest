import { actionTypes } from "./actions";

const initialState = {
  allVideos: []
};

export const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return { ...state, allVideos: [...state.allVideos, action.payload] };
    case actionTypes.REMOVE:
      return {
        ...state,
        allVideos: state.allVideos.filter(v => v.id !== action.videoId)
      };
    default:
      return state;
  }
};
