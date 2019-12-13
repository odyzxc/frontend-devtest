import { combineReducers } from "redux";
import {connectRouter} from 'connected-react-router';

import { videosReducer as videos } from "../views/videos/reducer";
import { toastReducer as toast } from '../reducer';

export const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  toast,
  videos
});
