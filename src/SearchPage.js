import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow"
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="//yt3.ggpht.com/a/AATXAJzD2mCg0LPx8_5qMmvfxz2kUbVvwHp94EjyG64COg=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="BB ki Vines"
        verified
        subs="20M"
        noOfVideos={200}
        description="BB Ki Vines is about BB and some funny instances happening around him & his family."
      />
      <hr />
      <VideoRow
        title="BB Ki Vines- | Business Call | "
        views="14M views"
        timestamp="5 months ago"
        channelImage="//yt3.ggpht.com/a/AATXAJzD2mCg0LPx8_5qMmvfxz2kUbVvwHp94EjyG64COg=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="BB Ki Vines"
        image="https://i.ytimg.com/vi/QQF4Uz4CZMg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBCtM-XaKnVBNqCngjPyAZQm4sHew"
      />
      <VideoRow
        title="BB Ki Vines- | What the Bunk | "
        views="16M views"
        timestamp="6 months ago"
        channelImage="//yt3.ggpht.com/a/AATXAJzD2mCg0LPx8_5qMmvfxz2kUbVvwHp94EjyG64COg=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="BB Ki Vines"
        image="https://i.ytimg.com/vi/RXeLbs_ogDU/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB2_4TPnpVecIlP2nX0-q9f_UBQ8Q"
      />
      <VideoRow
        title="BB Ki Vines- |Angry Masterji - part 14 | "
        views="24M views"
        timestamp="11 months ago"
        channelImage="//yt3.ggpht.com/a/AATXAJzD2mCg0LPx8_5qMmvfxz2kUbVvwHp94EjyG64COg=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="BB Ki Vines"
        image="https://i.ytimg.com/vi/_ey_1I1aJ5w/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDPFbhCkLvLbkOanxO7t61k5Ql3cA"
      />
      <VideoRow
        title="BB Ki Vines- | Itni Thand English Jhand | "
        views="34M views"
        timestamp="1 year ago"
        channelImage="//yt3.ggpht.com/a/AATXAJzD2mCg0LPx8_5qMmvfxz2kUbVvwHp94EjyG64COg=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="BB Ki Vines"
        image="https://i.ytimg.com/vi/OIr31AZtVSk/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDa-iLBNjHJgtcmu2cNHl6ePv1gEQ"
      />
    </div>
  );
}

export default SearchPage;
