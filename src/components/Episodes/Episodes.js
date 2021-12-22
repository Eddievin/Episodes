import React, { useState, useEffect } from "react";
import "./Episodes.css";

const Episodes = {
  videoSrc: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
  title: "Space Pilot 3000",
  originalAirDate: "March 28, 1999",
  desc: "A pizza delivery boy named Philip J. Fry accidentally stumbles into a cryogenic tube on Dеcember 31, 1999 and awakens on New Year's Eve in the year 2999, where he meets a mutant career counselor named Leela, an alcoholic robot named Bender, and his distant nephew Professor Farnsworth.",
  id: "1",
};

function EpisodesComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://api.sampleapis.com/futurama/episodes")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    };
    fetchData();
  }, []);

  if (!data.length) return <div>Loading...</div>;

  return (
    <div className="Episodes">
      <div className="image-container">
        <img src={Episodes.videoSrc} alt="" />
      </div>
      <h2>{Episodes.title}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{Episodes.originalAirDate}</p>
          <br />
          <p>{Episodes.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default EpisodesComponent;
