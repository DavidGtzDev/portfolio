import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import folderImg from "../../assets/folder.svg";
import etherfuseImg from "../../assets/etherfuse.jpg";
import startupImg from "../../assets/startup.jpg";
import fintechImg from "../../assets/fintech.jpg";
import tecImg from "../../assets/tecontime.png";
//import ASCII from "react-rainbow-ascii";
import { useState } from "react";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export default function MyProjects() {
  type Project = {
    name: string;
    description: string;
    image: null | StaticImageData;
  };

  const [project, setProject] = useState<Project>({
    name: "My Projects!",
    description: "Press the text to see my projects",
    image: null,
  });

  const projects: Project[] = [
    {
      name: "Tec-on-Time",
      description:
        "Tec-on-Time is a web application that guides students on campus to navigate through the facilities and thus arrive on time to their classes. It was developed collaboratively between several campuses. ",
      image: tecImg,
    },
    {
      name: "Etherfuse Hackathon",
      description:
        "Etherfuse Hackathon was an event in which the participants had to develop solutions using the blockchain technology.",
      image: etherfuseImg,
    },
    {
      name: "Startup Weekend",
      description:
        "Startup Weekend was an event in which the participants had to develop solutions to social issues. In this event our team won second place with FooScan, an app that allows you to scan barcodes and compare the nutritional content of several products.",
      image: startupImg,
    },
    {
      name: "Fintech Hackathon",
      description:
        "Etherfuse Hackathon was an event in which the participants had to develop financial solutions using the blockchain technology. In this event our team won second place with Cryptostocks, a platform to tokenize actions.",
      image: fintechImg,
    },
  ];

  function styleRoulete() {
    const randstyle = [
      style.color_red,
      style.color_blue,
      style.color_cyan,
      style.color_yellow,
      style.color_purple,
      style.color_green,
    ];
    const random = Math.floor(Math.random() * randstyle.length);
    return randstyle[random];
  }

  function handleSelect(e: any) {
    setProject(
      projects.find((project) => project.name === e.target.textContent)!
    );
  }

  function activeSidebar(e: any) {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.classList.toggle(style.active);
    }
  }
  return (
    <div>
      <motion.div className={style.sidebar} id="sidebar">
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={style.project_container}
      >
        <div>
          <h1 className={styleRoulete()}>{project.name}</h1>
          <p className={style.text} onClick={activeSidebar}>
            {project.description}
          </p>
        </div>
        {
          // If there is an image, display it
          project.image && (
            <Image
              src={project.image}
              alt="cat"
              className={style.project_image}
            />
          )
        }
      </motion.div>
    </div>
  );
}
