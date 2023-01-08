import React from "react";
import InfiniteList from "../infiniteList";
import style from "./style.module.css";
import AboutMe from "../aboutMe";
import Skills from "../skills";
import Github from "../github";

export default function Wraper() {
  return (
    <div className={style.introduction}>
      <InfiniteList></InfiniteList>
      <div className={style.subcontainer}>
        <AboutMe />
        <Skills></Skills>
        <Github></Github>
      </div>
    </div>
  );
}
