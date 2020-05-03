import React from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
const Mouse = ({ path = "about" }) => {
  return (
    <div className="mouse">
      <a href={"#" + path} className="mouse-icon">
        <div className="mouse-wheel customSvg">
          <ArrowDownwardIcon fontSize="large" />
        </div>
      </a>
    </div>
  );
};
export default Mouse;
