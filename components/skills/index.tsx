import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import mongoImg from "../../assets/mongo.jpg"
import reactImg from "../../assets/react.jpg"
import nodeImg from "../../assets/node.jpg"

export default function Skills() {
  return (
    <div className={style.skills}>
      <div className={style.skills_text}>
        <span className={style.color_blue}>David</span>
        .skills
        <span className={style.color_red}> = </span>
        <span className={style.color_yellow}>{"{"}</span>
        
        <br></br>
        <span className={style.color_yellow}>
            
          'languages': ['JavaScript', 'Java', 'Python', 'C++'],<br></br>
          'technologies': ['React', 'Node.js', 'Express', 'MongoDB',
          'SQL','Git/Github', 'HTML/CSS'],<br></br>
          'soft-skills' : ['Teamwork', 'Problem Solving', 'Communication',
          'Creativity'], <br></br>
          'hobbies': ['Guitar/Piano','Hanging out with my friends', 'Playing
          video games'] <br></br>
            {"}"}
        </span>
      </div>
      <div className={style.skills_image_container}>
        
      </div>
    </div>
  );
}
