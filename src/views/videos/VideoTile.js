import React from "react";
import { Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";

const VideoTile = ({ videoInfo, onDelete, onEdit }) => (
  <Container className="video-tile-container">
    <Row className="justify-content-md-center">{videoInfo.title}</Row>
    <Row className="justify-content-md-center">
      <Link to={`/videos/detail/${videoInfo.id}`}>
        <Image src={videoInfo.videoSnapshotThumbnailUrl} />{" "}
      </Link>
    </Row>
    <Row className="justify-content-md-center">{videoInfo.description}</Row>
    <Row className="justify-content-md-center">
      <Button onClick={onDelete}>Delete</Button>
      <Button onClick={onEdit}>Edit</Button>
    </Row>
  </Container>
);

export default VideoTile;
