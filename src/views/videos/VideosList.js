import React from "react";
import { useSelector } from "react-redux";
import { Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { getAllVideos } from "views/videos/selectors";

const VideosList = () => {
  const allVideos = useSelector(getAllVideos);
  return (
    <>
      {allVideos.map(v => (
        <Link to={`/videos/detail/${v.id}`} key={v.id}>
          Title: {v.title}
          <Image
            src={v.videoSnapshotThumbnailUrl}
            onClick={() => console.log("show full size or go to details?")}
          />
          Description: {v.description}
        </Link>
      ))}
    </>
  );
};

export default VideosList;
