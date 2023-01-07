import React from "react";
import InfiniteList from "../infiniteList";
import style from "./style.module.css";
import Image from "next/image";
import catOneImg from "../../assets/cat_one.jpg";
import catTwoImg from "../../assets/cat_two.jpg";

export default function Wraper() {
  return (
    <div className={style.introduction}>
      <InfiniteList></InfiniteList>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ marginTop: 15, marginLeft: 15 }}>
          <span style={{ color: "#56B6C2" }}>const </span>
          <span style={{ color: "#61AFEF" }}>David </span>
          <span style={{ color: "#E06C75" }}>= new </span>
          <span style={{ color: "#98C379" }}>Person</span>
          <span style={{ color: "#E5C07B" }}>(</span>
          <span style={{ color: "#E5C07B" }}>"David"</span>
          <span style={{ color: "#FFFFFF" }}>,</span>
          <span style={{ color: "#C678DD" }}> 18</span>
          <span style={{ color: "#FFFFFF" }}>,</span>
          <span style={{ color: "#E5C07B" }}> "Developer"</span>
          <span style={{ color: "#E5C07B" }}>)</span>

          <p style={{ color: "#ABB2BF", width: "40vw" }}>
            /* Hi, my name is David, I’m an 18 year old developer who is
            currently studing at Tecnológico de Monterrey Campus Chihuahua. */
          </p>
        </div>
        <div style={{display: "flex", justifyContent: "space-around", width: "50vw" }}>
          <Image
            src={catOneImg}
            alt="Picture of the author"
            width={200}
            height={250}
            style={{ filter: "drop-shadow(12px 12px 0px #C678DD)" }}
          />
          <Image
            src={catOneImg}
            alt="Picture of the author"
            width={300}
            height={250}
            style={{ filter: "grayscale(100%), drop-shadow(12px 12px 0px #61AFEF)" , marginTop: 40 }}
          />
        </div>

        <div></div>
      </div>
    </div>
  );
}
