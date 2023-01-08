import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import folderImg from "../../assets/folder.svg";
//import ASCII from "react-rainbow-ascii";
import { useEffect, useState } from "react";

export default function MyProjects() {
  const [title, setTitle] = useState("My Projects!");
  const [text, setText] = useState("Press 1 to see my projects");
  const projects = [
    {
      name: "Tec-on-Time",
      description:
        "A web application that allows students to schedule appointments with their professors and tutors.",
      image: folderImg,
    },
    {
      name: "Etherfuse Hackathon",
      description:
        "A web application that allows students to schedule appointments with their professors and tutors.",
      image: folderImg,
    },
    {
      name: "Startup Weekend",
      description:
        "A web application that allows students to schedule appointments with their professors and tutors.",
      image: folderImg,
    },
    {
      name: "Fintech Hackathon",
      description:
        "A web application that allows students to schedule appointments with their professors and tutors.",
      image: folderImg,
    },
  ];

  function handleSelect(e: any) {
    setTitle(e.target.textContent);
    if(!projects.find((project) => project.name === e.target.textContent)){
        setText("Press 1 to see my projects");
        
    }else{
        setText(projects.find((project) => project.name === e.target.textContent)!.description);
    }
  }

  useEffect(() => {
    // on key press 1, show projects
    document.addEventListener("keydown", (e) => {
      if (e.key === "1") {
        console.log("1 pressed")
        const sidebar = document.getElementById("sidebar");
        if (!sidebar) return;
        if (sidebar.style.display === "block") {
          sidebar.style.display = "none";
        } else {
          sidebar.style.display = "block";
        }
        //sidebar.classList.add(style.active);
      }
    });
  }, []);
  return (
    <div>
      <div className={style.sidebar} id="sidebar">
        <div className={style.searchbar_folder}>
          <Image src={folderImg} alt="folder" width={15} height={15} />
          Projects/Events
        </div>
        <div>
          <ul className={style.project_ul}>
            {projects.map((project) => (
              <li className={style.project_li} onClick={handleSelect}>{project.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={style.project_container}>
        {
             /*
                    <ASCII text={title} />
            */
        }
           
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}
