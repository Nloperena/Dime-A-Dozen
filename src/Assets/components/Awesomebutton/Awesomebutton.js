import React from "react";
import "./Awesomebutton.css";


import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

function Button() {
  return (
    <AwesomeButton
      cssModule={AwesomeButtonStyles}
      type="primary"
      ripple
      onPress={() => {
        // do something
      }}
    >
      Button
    </AwesomeButton>
  );
}

export default Awesomebutton;