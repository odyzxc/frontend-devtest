import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { getAllVideos } from "./selectors";
import Dialog from "components/Dialog";
import Pagination, { usePagination } from "components/Pagination";
import { strings, pageSizeOptions } from "common/constants";
import { removeVideo } from "./actions";
import VideoTile from "./VideoTile";

const VideosList = () => {
  const allVideos = useSelector(getAllVideos);
  const dispatch = useDispatch();
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [deletedVideoId, setDeletedVideoId] = useState("");

  const { pageData, selectedPage, onPageSelect, numberOfPages, onPageSizeSelect } = usePagination(allVideos, pageSizeOptions[0]);

  return (
    <>
      {pageData.map(v => (
        <VideoTile
          key={`video-tile-${v.id}`}
          videoInfo={v}
          onDeleteClick={() => {
            setDeletedVideoId(v.id);
            setDeleteDialogVisible(true);
          }}
        />
      ))}
      <Pagination
        pages={numberOfPages}
        pageSizeOptions={pageSizeOptions}
        selected={selectedPage}
        onPageSelect={onPageSelect}
        onPageSizeSelect={onPageSizeSelect}
      />
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
