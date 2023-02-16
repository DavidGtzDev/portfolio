import React from 'react'
import style from './style.module.css'

export default function SkillsMobile() {
  return (
    <div className={style.skills}>
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
  )
}
