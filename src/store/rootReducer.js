import { combineReducers } from "redux";
import { videosReducer as videos } from "../views/videos/reducer";
import { toastReducer as toast } from '../reducer';

const rootReducer = combineReducers({
  toast,
  videos
});

export default rootReducer;
