import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";

import { getAllVideos } from "./selectors";
import Dialog from "components/Dialog";
import Pagination, { usePagination } from "components/Pagination";
import { strings, pageSizeOptions } from "common/constants";
import { removeVideo } from "./actions";
import VideoTile from "./VideoTile";
import { history } from "store/history";

const VideosList = () => {
  const allVideos = useSelector(getAllVideos);
  const dispatch = useDispatch();
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [deletedVideoId, setDeletedVideoId] = useState("");

  const {
    pageData,
    selectedPage,
    onPageSelect,
    numberOfPages,
    onPageSizeSelect
  } = usePagination(allVideos, pageSizeOptions[0]);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pageData.map(v => (
          <Col md={3} key={`video-tile-${v.id}`}>
            <VideoTile
              videoInfo={v}
              onDelete={() => {
                setDeletedVideoId(v.id);
                setDeleteDialogVisible(true);
              }}
              onEdit={() => history.push(`/videos/edit/${v.id}`)}
            />
          </Col>
        ))}
      </div>

      <Row className="justify-content-md-center">
        <Pagination
          pages={numberOfPages}
          pageSizeOptions={pageSizeOptions}
          selected={selectedPage}
          onPageSelect={onPageSelect}
          onPageSizeSelect={onPageSizeSelect}
        />
      </Row>
      <Dialog
        title={strings.deleteDialog.title}
        message={strings.deleteDialog.message}
        onSubmit={() => dispatch(removeVideo(deletedVideoId))}
        visible={deleteDialogVisible}
        onClose={() => {
          setDeleteDialogVisible(false);
          setDeletedVideoId("");
        }}
      />
    </>
  );
};

export default VideosList;
