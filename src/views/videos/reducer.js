import { actionTypes } from "./actions";

const initialState = {
  allVideos: []
};

export const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return { ...state, videos: [...state.videos, action.payload] };
    case actionTypes.REMOVE:
      return {
        ...state,
        videos: state.videos.filter(v => v.id !== action.videoId)
      };
    default:
      return state;
  }
};
