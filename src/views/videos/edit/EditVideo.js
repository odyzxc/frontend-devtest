import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

import VideoForm from "views/videos/VideoForm";
import { showToast } from "actions";
import { editVideo } from "views/videos/actions";
import { strings } from "common/constants";
import { getVideo } from "views/videos/selectors";

const EditVideo = ({ history }) => {
  const { videoId } = useParams();
  const videoInfo = useSelector(getVideo(videoId));
  const dispatch = useDispatch();

  if (!videoInfo) {
    return <h1>{strings.errorMessage.videoNotFound}</h1>;
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Edit video</h1>
          <VideoForm
            onSubmitSuccess={() => {
              dispatch(
                showToast({
                  message: strings.successMessage.editedVideo,
                  title: strings.successMessage.title
                })
              );
              history.push("/videos/");
            }}
            initialValues={videoInfo}
            onSubmit={values => dispatch(editVideo(values))}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default EditVideo;
