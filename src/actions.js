const TOAST_ACTION_TYPE_PREFIX = "TOAST_";

export const actionTypes = {
  SHOW: `${TOAST_ACTION_TYPE_PREFIX}SHOW`,
  HIDE: `${TOAST_ACTION_TYPE_PREFIX}HIDE`
};

export const showToast = ({ message, title }) => ({
  type: actionTypes.SHOW,
  payload: { message, title }
});

export const hideToast = () => ({
  type: actionTypes.HIDE
});
