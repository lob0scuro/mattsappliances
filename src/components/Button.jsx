import styles from "./Button.module.css";
import React from "react";
import clsx from "clsx";

const Button = ({ title, type, secondary, ...props }) => {
  return (
    <button
      type={type ? type : "button"}
      {...props}
      className={clsx(styles.btn, secondary ? styles.secondaryBtn : "")}
    >
      {title}
    </button>
  );
};

export default Button;
