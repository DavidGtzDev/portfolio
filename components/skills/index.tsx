import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import jsImg from "../../assets/js.jpg"
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
        <Image src={jsImg} alt="js" className={style.skills_image_first}/>
        <Image src={reactImg} alt="react" className={style.skills_image_second}/>
        <Image src={nodeImg} alt="node" className={style.skills_image_third}/>
      </div>
    </div>
  );
}
