import React from "react";
import video from "../video/matrix.mp4";

import { Products } from "../../data";
import { Button } from "../button/button";
import { Product } from "../product/product";

import s from "./home.module.scss";

export const Home = () => (
  <div>
    <div className={s.home}>
      <div className={s.background}>
        <video src={video} autoPlay loop />
      </div>
      <div className={s.container}>
        <div className={s.content}>
          <div>Welcome to neyron's portfolio</div>
          <div className={s.links}>
            <Button href="https://github.com/neyron163">My Github</Button>
            <Button href="https://hh.ru/resume/2dc03854ff03a030130039ed1f6731444c6f41">
              My CV
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div className="products">
      {Products.map(({ image, imageFull, link, description, text }) => (
        <Product image={image} imageFull={imageFull} link={link} description={description} text={text} />
      ))}
    </div>
  </div>
);
