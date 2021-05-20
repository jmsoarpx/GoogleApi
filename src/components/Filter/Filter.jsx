import React from "react";
import PropTypes from "prop-types";

const Filter = (props) => {
  return <input type={props.type} className={props.class} placeholder={props.placeholder} onChange={props.onChange} />;
};

export default Filter;
