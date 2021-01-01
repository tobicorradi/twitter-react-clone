import React from "react";
import SparkIcon from "../Icons/SparkIcon";
import WriteTweet from "../WriteTweet";
import Tweet from "../Tweet";
import WidgetColumn from "../WidgetColumn";

import "./Content.css";
const Content = () => {
  return (
    <>
      <div className="content">
        <div className="content__container">
          <div className="main__content">
            <div className="content__header">
              <h2 className="content__title">Home</h2>
              <SparkIcon />
            </div>
            <WriteTweet />
            <div className="content__tweetGallery">
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
            </div>
          </div>
          <WidgetColumn />
        </div>
      </div>
    </>
  );
};

export default Content;
