import React from "react";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import uuid from "uuid";

import "./App.css";

import { history } from "./store/history";
import configureStore from "./store/configureStore";

import TopLevelMenuBar from "./components/TopLevelMenuBar";
import SecondaryMenuBar from "./components/SecondaryMenuBar";
import GlobalToast from "./GlobalToast";

import Main from "./views/main/Main";
import Videos from "./views/videos/Videos";

const randomFromRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const generateTestData = numberOfEntries => {
  const titles = ["Rambo", "Cute cat video", "pr0n", "Another awesome title"];
  const descriptions = [
    "a nice description",
    "another description",
    "my imagination sucks",
    "is there imagination API somewhere?"
  ];
  return new Array(numberOfEntries).fill().map((e, i) => ({
    id: uuid.v4(),
    title: `${titles[randomFromRange(0, titles.length - 1)]} ${i + 1}`,
    description: `${
      descriptions[randomFromRange(0, descriptions.length - 1)]
    } ${i + 1}`,
    videoSnapshotThumbnailUrl: `https://picsum.photos/id/${i}/200/300`,
    videoSnapshotUrl: `https://picsum.photos/id/${i}/400/600`
  }));
};

const testInitialState = {
  videos: {
    allVideos: generateTestData(9)
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
