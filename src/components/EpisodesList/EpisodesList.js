import React from "react";
import "./EpisodesList.css";

import Episodes from "../Episodes/Episodes";

class EpisodesList extends React.Component {
  render() {
    return (
      <div className="EpisodesList">
        <Episodes />
        <Episodes />
        <Episodes />
        <Episodes />
        <Episodes />
        <Episodes />
      </div>
    );
  }
}

export default EpisodesList;
