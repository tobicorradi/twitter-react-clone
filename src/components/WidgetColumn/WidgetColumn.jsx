import React from "react";
import InputText from "../InputText";
import TrendBox from "../TrendBox";
import SearchIcon from "../Icons/SearchIcon";
import "./WidgetColumn.css";
const WidgetColumn = () => {
  return (
    <div className="widgetColumn">
      <form className="widgetColumn__form" action="">
        <InputText />
        <button className="widgetColumn__search" type="submit">
          <SearchIcon />
        </button>
      </form>
      <TrendBox />
      <div className="widgetColumn__footer">
        <span>Terms of service</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
        <span>Ads Info</span>
        <span>© 2020 Twitter, Inc.</span>
      </div>
    </div>
  );
};

export default WidgetColumn;
