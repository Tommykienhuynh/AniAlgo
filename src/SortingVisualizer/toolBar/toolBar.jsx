import React from "react";
import "./toolBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faCog,
  faRedo,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

export default function ToolBar({ generateNumbers, bubbleSort, changeArr }) {
  function genNumbers() {
    generateNumbers();
  }
  function bubbleAnimation() {
    bubbleSort();
  }

  return (
    <div className="toolBarContainer">
      <FontAwesomeIcon
        data-tooltip="popUp"
        className="icon"
        icon={faPlay}
        onClick={() => bubbleAnimation()}
      ></FontAwesomeIcon>

      <FontAwesomeIcon
        className="icon"
        icon={faPause}
        onClick={changeArr}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className="icon"
        onClick={genNumbers}
        icon={faRedo}
      ></FontAwesomeIcon>
      <FontAwesomeIcon className="icon" icon={faAddressCard}></FontAwesomeIcon>
      <FontAwesomeIcon className="icon" icon={faCog}></FontAwesomeIcon>
    </div>
  );
}
