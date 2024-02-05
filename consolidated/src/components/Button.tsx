import React from "react";
import className from "classnames";
import "./Button.css";

type Props = {
  children: any;
  primary: any;
  secondary: any;
  success: any;
  warning: any;
  danger: any;
  outline: any;
  rounded: any;
  rest: any;
};

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}: Props) {
  const classes = className(rest.className, {
    "bg-blue-500 text-white": primary,
    "bg-red-500 text-white": danger,
    "bg-green-500 text-white": success,
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
