import React from "react";
import video from "../video/cover.mp4";
import cover from '../../images/cover.jpg';

import { Products } from "../../data";
import { Button } from "../button/button";
import { Product } from "../product/product";

import s from "./home.module.scss";

export const Home = () => (
  <div>
    <div className={s.home}>
      <div className={s.background}>
        <img src={cover}/>
      </div>
      <div className={s.container}>
        <div className={s.content}>
          <div>Welcome to neyron's portfolio</div>
          <div className={s.links}>
            <Button href="https://github.com/neyron163">My Github</Button>
            <Button href="https://www.linkedin.com/in/andrew-vershinin-932612160/">My Linkedin</Button>
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
