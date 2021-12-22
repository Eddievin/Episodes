import React from "react";
import "./App.css";

import EpisodesList from "../EpisodesList/EpisodesList";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <h1>Episodes</h1>
      <SearchBar />
      <EpisodesList />
    </div>
  );
}

export default App;
