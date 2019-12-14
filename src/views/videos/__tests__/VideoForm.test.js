import React from "react";
import renderer from "react-test-renderer";

import VideoForm from "views/videos/VideoForm";


describe("VideoForm", () => {
  it("Should render", () => {
    const initialValues = {
      id: 1,
      title: "",
      videoSnapshotThumbnailUrl: "",
      videoSnapshotUrl: "",
      description: ""
    };
    const tree = renderer
      .create(<VideoForm initialValues={initialValues} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
