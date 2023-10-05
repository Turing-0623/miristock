import React from "react";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="rectangle" />
    </div>
  );
};

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const StatusBar = ({
  notch = "notch.svg",
  iconMobileSignal = "mobile-signal.svg",
  wifi = "wifi.svg",
  statusbarBattery = "statusbar-battery.svg",
}) => {
  return (
    <div className="status-bar">
      <img className="notch" alt="Notch" src={notch} />
      <div className="time">11:11</div>
      <div className="right-side">
        <img className="icon-mobile-signal" alt="Icon mobile signal" src={iconMobileSignal} />
        <img className="wifi" alt="Wifi" src={wifi} />
        <img className="statusbar-battery" alt="Statusbar battery" src={statusbarBattery} />
      </div>
    </div>
  );
};

StatusBar.propTypes = {
  notch: PropTypes.string,
  iconMobileSignal: PropTypes.string,
  wifi: PropTypes.string,
  statusbarBattery: PropTypes.string,
};