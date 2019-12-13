import React from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import uuid from "uuid";

import VideoForm from "views/videos/VideoForm";
import { showToast } from "actions";
import { strings } from "common/constants";
import { addVideo } from "views/videos/actions";

const NewVideo = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Add new video</h1>
          <VideoForm
            onSubmitSuccess={() =>
              dispatch(
                showToast({
                  message: strings.successMessage.addedNewVideo,
                  title: strings.successMessage.title
                })
              )
            }
            initialValues={{
              id: uuid.v4(),
              title: "",
              videoSnapshotThumbnailUrl: "",
              videoSnapshotUrl: "",
              description: ""
            }}
            submitAction={addVideo}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NewVideo;
