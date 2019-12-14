import { videosReducer } from "../reducer";
import { actionTypes } from "../actions";

describe("videosReducer", () => {
  it("should return the initial state", () => {
    expect(videosReducer(undefined, {})).toEqual({
      allVideos: []
    });
  });

  it("should handle ADD action", () => {
    const testVideoInfo = { id: "testVideoId1" };
    expect(
      videosReducer(undefined, {
        type: actionTypes.ADD,
        payload: testVideoInfo
      })
    ).toEqual({
      allVideos: [testVideoInfo]
    });
  });

  it("should handle EDIT action", () => {
    const testVideoInfo = { id: "testVideoId2", title: "testTitle" };
    const testState = {
      allVideos: [testVideoInfo]
    };
    const newTestTitle = "new test title";
    const editedTestVideo = { ...testVideoInfo, title: newTestTitle };
    expect(
      videosReducer(testState, {
        type: actionTypes.EDIT,
        payload: editedTestVideo
      })
    ).toEqual({
      allVideos: [editedTestVideo]
    });
  });

  it("should handle REMOVE action", () => {
    const testVideoInfo = { id: "testVideoId3" };
    const testState = {
      allVideos: [testVideoInfo]
    };
    expect(
      videosReducer(testState, {
        type: actionTypes.REMOVE,
        videoId: testVideoInfo.id
      })
    ).toEqual({
      allVideos: []
    });
  });
});
