import classNames from "classnames";
import React, { useState } from "react";

import {Button} from '../button/button';

import s from "./product.module.scss";

interface PropsType {
  image: string;
  imageFull: string;
  link: string;
  description: string;
  text: string;
}

export const Product = ({ image, imageFull, link, description, text }: PropsType): React.ReactElement => {
  const [visible, setVisible] = useState(false);

  function openPopup (isVisible: boolean) {
      setVisible(isVisible);
      document.documentElement.scrollTop = 0;
  }

  return (
    <div className={s.container}>
      {visible && <div className={s.overlay} onClick={() => setVisible(false)} />}
      <div className={s.product}>
        <img src={image} alt="delano" onClick={() => openPopup(true)} />
        <div className={s.description}>
          <div className={s.text}>{description}</div>
          <Button href={link} className={s.link}>
            {text}
          </Button>
        </div>
      </div>
      <div
        className={classNames(s.popup, { [s.visible]: visible })}
        onClick={() => openPopup(false)}
      >
        <img src={imageFull} alt="delano" />
      </div>
    </div>
  );
};
