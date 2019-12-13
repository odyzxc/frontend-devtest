import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import VideoDetails from "./VideoDetails";
import VideosList from "./VideosList";
import NewVideo from "./new/NewVideo";
import EditVideo from "./edit/EditVideo";

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
