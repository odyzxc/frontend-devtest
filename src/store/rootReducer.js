import { combineReducers } from "redux";
import { videosReducer as videos } from "../views/videos/reducer";

const rootReducer = combineReducers({
  videos
});

export default rootReducer;
