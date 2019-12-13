import React from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";

const VideoTile = ({ videoInfo, onDeleteClick }) => (
  <div>
    <Link to={`/videos/detail/${videoInfo.id}`}>
      Title: {videoInfo.title}
      <Image
        src={videoInfo.videoSnapshotThumbnailUrl}
      />
      Description: {videoInfo.description}
    </Link>
    <Button onClick={onDeleteClick}>Delete</Button>
  </div>
);

export default VideoTile;
