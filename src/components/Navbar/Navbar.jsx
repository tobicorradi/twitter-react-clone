import React from "react";
import IconButton from "../IconButton";
import HomeIcon from "../Icons/HomeIcon";
import ExploreIcon from "../Icons/ExploreIcon";
import NotificationIcon from "../Icons/NotificationIcon";
import MessageIcon from "../Icons/MessageIcon";
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <IconButton Icon={HomeIcon} title={"Home"} />
      <IconButton Icon={ExploreIcon} title={"Explore"} />
      <IconButton Icon={NotificationIcon} title={"Notifications"} />
      <IconButton Icon={MessageIcon} title={"Messages"} />
    </nav>
  );
};

export default Navbar;
