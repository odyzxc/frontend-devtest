import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import VideoDetails from "./VideosDetails";
import VideosList from "./VideosList";

const Videos = () => {
  const match = useRouteMatch();
  return (
    <>
      VIDEOS
      <Switch>
        <Route path={`${match.url}/detail/:videoId`}>
          <VideoDetails />
        </Route>
        <Route path={match.url}>
          <VideosList />
        </Route>
      </Switch>
    </>
  );
};

export default Videos;
