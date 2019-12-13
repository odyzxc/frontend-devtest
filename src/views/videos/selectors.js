export const getAllVideos = state => state.videos.allVideos;
export const getVideo = id => state => state.videos.allVideos.find(v => v.id === id);