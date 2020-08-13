import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  description = "BB Ki Vines is about BB and some funny instances happening around him & his family. ",
  subs = "20M",
  channelImage,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} .
          <span className="videoRow__subs">
            {" "}
            <span className="videoRow__subNum">{subs}</span> Subscribers
          </span>{" "}
          {views} views . {timestamp}{" "}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
