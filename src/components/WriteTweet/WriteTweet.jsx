import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import GifIcon from "@material-ui/icons/Gif";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import Button from "../Button";
import "./WriteTweet.css";
const WriteTweet = () => {
  return (
    <div className="writeTweet">
      <Avatar />
      <div className="writeTweet__header">
        <input
          className="writeTweet__input"
          type="text"
          placeholder="What’s happening?"
        />
        <div className="writeTweet_actions">
          <div className="writeTweet__icons">
            <CropOriginalIcon />
            <GifIcon />
            <InsertEmoticonIcon />
          </div>
          <Button type={"main"} title={"Tweet"} />
        </div>
      </div>
    </div>
  );
};

export default WriteTweet;
