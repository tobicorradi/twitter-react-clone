import React from "react";
import Logo from "../Logo";
import IconButton from "../IconButton";
import HomeIcon from "../Icons/HomeIcon";
import ExploreIcon from "../Icons/ExploreIcon";
import NotificationIcon from "../Icons/NotificationIcon";
import MessageIcon from "../Icons/MessageIcon";
import BookmarkIcon from "../Icons/BookmarkIcon";
import Button from "../Button";
import ListIcon from "../Icons/ListIcon";
import UserIcon from "../Icons/UserIcon";
import MoreIcon from "../Icons/MoreIcon";
import Avatar from "@material-ui/core/Avatar";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <header className="sidebar">
      <div className="sidebar__container">
        <Logo />
        <nav className="sidebar__buttons">
          <IconButton Icon={HomeIcon} title={"Home"} />
          <IconButton Icon={ExploreIcon} title={"Explore"} />
          <IconButton Icon={NotificationIcon} title={"Notifications"} />
          <IconButton Icon={MessageIcon} title={"Messages"} />
          <IconButton Icon={BookmarkIcon} title={"Bookmarks"} />
          <IconButton Icon={ListIcon} title={"Lists"} />
          <IconButton Icon={UserIcon} title={"Profile"} />
          <IconButton Icon={MoreIcon} title={"More"} />
          <Button type={"main"} title={"Tweet"} />
        </nav>
        <div className="sidebar__userBlock">
          <Avatar className="sidebar__avatar" />
          <span className="sidebar__username">
            <strong>tobicorradi</strong>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
