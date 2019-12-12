import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import VideoDetails from "./VideoDetails";
import VideosList from "./VideosList";
import NewVideo from "./new/NewVideo";

const Videos = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.url}/detail/:videoId`}>
        <VideoDetails />
      </Route>
      <Route path={`${match.url}/new`}>
        <NewVideo />
      </Route>
      <Route path={match.url}>
        <VideosList />
      </Route>
    </Switch>
  );
};

export default Videos;
