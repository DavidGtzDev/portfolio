import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import jsImg from "../../assets/js.jpg"
import reactImg from "../../assets/react.jpg"
import nodeImg from "../../assets/node.jpg"
import { motion } from "framer-motion"

export default function Skills() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={style.skills}>
      <motion.div className={style.skills_text}>
        <span className={style.color_blue}>David</span>
        .skills
        <span className={style.color_red}> = </span>
        <span className={style.color_yellow}>{"{"}</span>
        
        <br></br>
        <span className={style.color_yellow}>
            
          'languages': ['JavaScript', 'Typescript', 'Python', 'C++', 'Rust'],<br></br>
          'technologies': ['React', 'Node.js', 'Next Js','Express', 'MongoDB',
          'SQL','Git/Github', 'HTML/CSS'],<br></br>
          'soft-skills' : ['Teamwork', 'Problem Solving', 'Communication',
          'Creativity'], <br></br>
          'hobbies': ['Guitar/Piano','Hanging out with my friends'] <br></br>
            {"}"}
        </span>
      </motion.div>
      <div className={style.skills_image_container}>
        <Image src={jsImg} alt="js" className={style.skills_image_first}/>
        <Image src={reactImg} alt="react" className={style.skills_image_second}/>
        <Image src={nodeImg} alt="node" className={style.skills_image_third}/>
      </div>
    </motion.div>
  );
}
