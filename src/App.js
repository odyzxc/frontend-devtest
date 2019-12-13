import React from "react";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import "./App.css";

import { history } from "./store/history";
import configureStore from "./store/configureStore";

import TopLevelMenuBar from "./components/TopLevelMenuBar";
import SecondaryMenuBar from "./components/SecondaryMenuBar";
import GlobalToast from "./GlobalToast";

import Main from "./views/main/Main";
import Videos from "./views/videos/Videos";

const testInitialState = {
  videos: {
    allVideos: [
      {
        id: "1",
        title: "title 1",
        description: "desc",
        videoSnapshotThumbnailUrl:
          "http://www.onehd.pl/wp-content/themes/radial/images/placeholder-580-video.png",
        videoSnapshotUrl:
          "http://www.onehd.pl/wp-content/themes/radial/images/placeholder-580-video.png"
      },
      {
        id: "2",
        title: "title 2",
        description: "desc",
        videoSnapshotThumbnailUrl:
          "http://www.onehd.pl/wp-content/themes/radial/images/placeholder-580-video.png",
        videoSnapshotUrl:
          "http://www.onehd.pl/wp-content/themes/radial/images/placeholder-580-video.png"
      },
      {
        id: "3",
        title: "title 3",
        description: "desc",
        videoSnapshotThumbnailUrl:
          "http://www.onehd.pl/wp-content/themes/radial/images/placeholder-580-video.png",
        videoSnapshotUrl:
          "http://www.onehd.pl/wp-content/themes/radial/images/placeholder-580-video.png"
      },
      {
        id: "4",
        title: "title 4",
        description: "desc",
        videoSnapshotThumbnailUrl:
          "http://www.onehd.pl/wp-content/themes/radial/images/placeholder-580-video.png",
        videoSnapshotUrl:
          "http://www.onehd.pl/wp-content/themes/radial/images/placeholder-580-video.png"
      }
    ]
  }
};

const store = configureStore(history, testInitialState);

const App = () => (
  <div className="App">
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <TopLevelMenuBar />
        <SecondaryMenuBar />
        <Switch>
          <Route path="/videos" component={Videos} />
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <GlobalToast />
      </ConnectedRouter>
    </Provider>
  </div>
);

export default App;
