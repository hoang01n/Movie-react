import React, {useEffect, useState} from "react";
import Button from "../Button";
import "boxicons";
import "./Go-to-top.scss";
export const GoToTop = () => {
  const [showGoToTop, setShowGoto] = useState(false);
  const handelGoToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 250) {
        setShowGoto(true);
      } else {
        setShowGoto(false);
      }
    };
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);
  return (
    <>
      {" "}
      {showGoToTop && (
        <Button className={"btn-GoToTop radius"} onClick={handelGoToTop}>
          <box-icon color="white" name="chevron-up" type="solid"></box-icon>
        </Button>
      )}
    </>
  );
};
