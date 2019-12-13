import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import VideoDetails from "views/videos/VideoDetails";
import VideosList from "views/videos/VideosList";
import NewVideo from "views/videos/new/NewVideo";
import EditVideo from "views/videos/edit/EditVideo";

const Videos = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.url}/detail/:videoId`} component={VideoDetails} />
      <Route path={`${match.url}/edit/:videoId`} component={EditVideo} />
      <Route path={`${match.url}/new`} component={NewVideo} />
      <Route path={match.url} component={VideosList} />
    </Switch>
  );
};

export default Videos;
