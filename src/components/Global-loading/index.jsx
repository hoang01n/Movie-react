import React from "react";
import logo from "../../assets/logo/Logo.png";
import "./global-loading.scss";
import ReactLoading from "react-loading";
const GlobalLoading = ({hiden = false}) => {
  const classes = `${hiden ? "GlobalLoading hiden" : "GlobalLoading"}`;
  console.log("hiden", hiden);
  return (
    <div className={classes}>
      <div className="loading-item">
        <img src={logo} alt="" />
        <div className="loading">
          <ReactLoading
            type="balls"
            color="white"
            height={"80%"}
            width={"80%"}
          />
        </div>
      </div>
    </div>
  );
};
export default GlobalLoading;
