import React from "react";
import type { StaticImageData } from "next/image";
import etherfuseImg from "../../../assets/etherfuse.jpg";
import startupImg from "../../../assets/startup.jpg";
import fintechImg from "../../../assets/fintech.jpg";
import tecImg from "../../../assets/tecontime.png";
import style from "./style.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectsMobile() {
  type Project = {
    name: string;
    description: string;
    image: StaticImageData;
  };

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

  return (
    <div className={style.project_container}>
      <h1>/* My Projects */</h1>
      {projects.map((project) => {
        return (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <div className={style.projects}>
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <Image
                src={project.image}
                alt="Picture of the author"
                className={style.project_image}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
