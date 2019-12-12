import React from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import uuid from "uuid";

import VideoForm from "../VideoForm";
import { showToast } from "../../../actions";
import { strings } from "../../../constants";

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
                  message: "Successfuly added new video",
                  title: "Success!"
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
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NewVideo;
