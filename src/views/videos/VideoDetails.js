import React from "react";
import { useParams } from "react-router-dom";

const VideoDetails = () => {
  const { videoId } = useParams();
  return <>VIDEOS {videoId} DETAILS</>;
};

export default VideoDetails;
