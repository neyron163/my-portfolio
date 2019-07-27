import React from "react";

import s from "./home.module.scss";

export const Home = () => (
  <div className={s.home}>
    <div className={s.progress}>
      <div>My portfolio in progress</div>
      😄
    </div>
    <div className={s.description}>
      You may already look at something interesting
    </div>
    <div className={s.info}>
      <a href="https://github.com/neyron163" className={s.github}>
        My github
      </a>
      <a href="/manager" className={s.here}>
        Task manager
      </a>
      <a href="/aviasales" className={s.aviasales}>Aviasales</a>
    </div>
  </div>
);
