import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CommentIcon from "../Icons/CommentIcon";
import RetweetIcon from "../Icons/RetweetIcon";
import LikeIcon from "../Icons/LikeIcon";
import ShareIcon from "../Icons/ShareIcon";
import "./Tweet.css";
const Tweet = () => {
  return (
    <div className="tweet">
      <Avatar className="tweet__avatar" />
      <div className="tweet__content">
        <div className="tweet__authorBlock">
          <h3 className="tweet__name">
            <strong>Test</strong>
          </h3>
          <span className="tweet__username">@user12345</span>
          <span className="tweet__date">Dec 6</span>
        </div>
        <div className="tweet__text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
            incidunt porro modi. Tempore magnam rem ab id veniam quod,
            consectetur alias cupiditate accusamus expedita exercitationem,
            dignissimos illo eveniet quasi architecto.
            <span className="tweet__tag">#Test</span>
            <span className="tweet__tag">#Test</span>
            <span className="tweet__tag">#Test</span>
          </p>
          <img
            className="tweet__img"
            src="https://upload.wikimedia.org/wikipedia/en/3/3e/Lo-Fi_Girl.png"
            alt=""
          />
        </div>
        <div className="tweet__actions">
          <div className="tweet__button">
            <CommentIcon />
            <span className="tweet__number">2</span>
          </div>
          <div className="tweet__button">
            <RetweetIcon />
            <span className="tweet__number">714</span>
          </div>
          <div className="tweet__button">
            <LikeIcon />
            <span className="tweet__number">3452</span>
          </div>
          <div className="tweet__button">
            <ShareIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
