// import React from "react";
// import PropTypes from "prop-types";
// import "./button.scss";
// const Button = (props) => {
//   return (
//     <button
//       className={props.className ? `btn ${props.className}` : `btn`}
//       // className={`btn ${props.className}`}
//       onClick={props.onClick ? () => props.onClick() : null}
//     >
//       {props.children}
//     </button>
//   );
// };

// Button.propTypes = {
//   onClick: PropTypes.func,
// };
// export const OutlineButton = (props) => {
//   return (
//     <Button
//       className={`btn-outline ${props.className ? props.className : null}`}
//       onClick={props.onClick ? () => props.onClick() : null}
//       // onClick={props.onClick}
//     >
//       {props.children}
//     </Button>
//   );
// };

// // OutlineButton.propTypes = {
// //   onClick: PropTypes.func,
// //   className: PropTypes.string,
// // };
// export default Button;
import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = (props) => {
  return (
    <button
      className={props.className ? `btn ${props.className}` : `btn`}
      onClick={props.onClick ? props.onClick : null}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export const OutlineButton = (props) => {
  return (
    <Button
      className={`btn-outline ${props.className ? props.className : ""}`}
      onClick={props.onClick ? () => props.onClick() : null}
    
    >
      {props.children}
    </Button>
  );
};

OutlineButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
