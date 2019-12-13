const VIDEO_ACTION_TYPE_PREFIX = 'VIDEOS_';

export const actionTypes = {
  ADD: `${VIDEO_ACTION_TYPE_PREFIX}ADD`,
  EDIT: `${VIDEO_ACTION_TYPE_PREFIX}EDIT`,
  REMOVE: `${VIDEO_ACTION_TYPE_PREFIX}REMOVE`
};

export const addVideo = video => ({
  type: actionTypes.ADD,
  payload: video
});

export const editVideo = video => ({
  type: actionTypes.EDIT,
  payload: video
});

export const removeVideo = videoId => ({
  type: actionTypes.REMOVE,
  videoId
});