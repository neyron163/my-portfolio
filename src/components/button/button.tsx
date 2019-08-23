import classNames from "classnames";
import React from "react";

import s from "./button.module.scss";

export interface PropsType {
  children: JSX.Element | string | number;
  href?: string;
  width: "small" | "medium" | "long";
  className?: string;
}

export const Button = ({
  children,
  href,
  width,
  className,
}: PropsType): React.ReactElement => {
  if (href) {
    return (
      <a href={href} className={classNames(s.button, s.link, s[width], className)}>
        {children}
      </a>
    );
  }
  return <button className={classNames(s.button, s.link, s[width])}>{children}</button>;
};

Button.defaultProps = {
  width: "small",
};
