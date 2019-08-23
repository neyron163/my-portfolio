import classNames from "classnames";
import React from "react";

import {Link} from 'react-router-dom';

import s from "./link.module.scss";

interface PropsType {
  children: JSX.Element | string | number;
  width: "small" | "medium" | "long";
  to: string;
}

export const LinkButton = ({
  children,
  width,
  to,
}: PropsType): React.ReactElement => {
  return <Link to={to} className={classNames(s.button, s.link, s[width])}>{children}</Link>;
};

LinkButton.defaultProps = {
  width: "small",
};
