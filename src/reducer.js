import { actionTypes } from "./actions";

const initialState = {
  message: '',
  title: '',
  visible: false
};

export const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW:
      return { ...state, message: action.payload.message, title: action.payload.title, visible: true };
    case actionTypes.HIDE:
      return initialState;
    default:
      return state;
  }
};
