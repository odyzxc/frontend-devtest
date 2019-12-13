import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Image, Button } from "react-bootstrap";

import { getVideo } from "./selectors";
import { strings } from "../../constants";

const VideoDetails = () => {
  const { videoId } = useParams();
  const videoInfo = useSelector(getVideo(videoId));
  if (!videoInfo) {
    return <h1>{strings.errorMessage.videoNotFound}</h1>;
  }
  return (
    <>
      Title: {videoInfo.title}
      <Image src={videoInfo.videoSnapshotUrl} />
      Description: {videoInfo.description}
      <Button>
        <Link to={`/videos/edit/${videoId}`}>Edit</Link>
      </Button>
    </>
  );
};

export default VideoDetails;
