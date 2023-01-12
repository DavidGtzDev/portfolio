import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import folderImg from "../../assets/folder.svg";
import catImg from "../../assets/cat_one.jpg";
//import ASCII from "react-rainbow-ascii";
import { useEffect, useState } from "react";
import type { StaticImageData } from "next/image";

export default function MyProjects() {

  type Project = {
    name: string;
    description: string;
    image: null | StaticImageData;
  };

  const [project, setProject] = useState<Project>({
    name: "My Projects!",
    description: "Press the text to see my projects",
    image: null
  });

  const projects: Project[] = [
    {
      name: "Tec-on-Time",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas leo vel sapien commodo, dictum vestibulum est porta. Integer sed arcu quam. Suspendisse maximus sapien sem, ac commodo magna dignissim vitae. Sed sed magna tempus ante vestibulum elementum non congue mi. Maecenas posuere, nisi id laoreet pulvinar, purus nunc convallis turpis, ut finibus mi velit a urna. Nullam arcu dui, sollicitudin ac elit non, accumsan finibus turpis. Etiam ultrices lacinia ultrices. Nullam non pharetra est.",
      image: catImg,
    },
    {
      name: "Etherfuse Hackathon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas leo vel sapien commodo, dictum vestibulum est porta. Integer sed arcu quam. Suspendisse maximus sapien sem, ac commodo magna dignissim vitae. Sed sed magna tempus ante vestibulum elementum non congue mi. Maecenas posuere, nisi id laoreet pulvinar, purus nunc convallis turpis, ut finibus mi velit a urna. Nullam arcu dui, sollicitudin ac elit non, accumsan finibus turpis. Etiam ultrices lacinia ultrices. Nullam non pharetra est.",
      image: catImg,
    },
    {
      name: "Startup Weekend",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas leo vel sapien commodo, dictum vestibulum est porta. Integer sed arcu quam. Suspendisse maximus sapien sem, ac commodo magna dignissim vitae. Sed sed magna tempus ante vestibulum elementum non congue mi. Maecenas posuere, nisi id laoreet pulvinar, purus nunc convallis turpis, ut finibus mi velit a urna. Nullam arcu dui, sollicitudin ac elit non, accumsan finibus turpis. Etiam ultrices lacinia ultrices. Nullam non pharetra est.",
      image: catImg,
    },
    {
      name: "Fintech Hackathon",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas leo vel sapien commodo, dictum vestibulum est porta. Integer sed arcu quam. Suspendisse maximus sapien sem, ac commodo magna dignissim vitae. Sed sed magna tempus ante vestibulum elementum non congue mi. Maecenas posuere, nisi id laoreet pulvinar, purus nunc convallis turpis, ut finibus mi velit a urna. Nullam arcu dui, sollicitudin ac elit non, accumsan finibus turpis. Etiam ultrices lacinia ultrices. Nullam non pharetra est.",
      image: catImg,
    },
  ]

  function styleRoulete() {
    const randstyle = [style.color_red, style.color_blue, style.color_cyan, style.color_yellow, style.color_purple, style.color_green];
    const random = Math.floor(Math.random() * randstyle.length);
    return randstyle[random];
  }

  function handleSelect(e: any) {
    setProject(projects.find((project) => project.name === e.target.textContent)!);
  }

  function activeSidebar(e: any){
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.classList.toggle(style.active);
    }
  }
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
              <li
                className={style.project_li}
                onClick={handleSelect}
                key={Math.floor(Math.random() * 4000)}
              >
                {project.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={style.project_container}>
        <div>
          <h1 className={styleRoulete()}>{project.name}</h1>
          <p className={style.text} onClick={activeSidebar}>{project.description}</p>
        </div>
        {
          // If there is an image, display it
          project.image && <Image src={project.image} alt="cat" className={style.project_image}/>
        }
      </div>
    </div>
  );
}
