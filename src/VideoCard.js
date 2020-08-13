import React from "react";
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

function VideoCard({ title, channel, views, timestamp, image, channelImage }) {
  return (
    <div className="videoCard">
      <img className="videoCard__image" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" src={channelImage} alt="" />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
