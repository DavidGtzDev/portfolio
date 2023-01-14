import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import githubImg from "../../assets/github.png";
import linkedinImg from "../../assets/linkedin.png";
import mailImg from "../../assets/mail.png";
import { motion } from "framer-motion"

export default function ContactMe() {
  return (
    <div className={style.contact}>
      <h1>Contact Me</h1>
      <div className={style.card_container}>
        <a href="https://github.com/DavidGtzDev" target="_blank">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={style.card}>
            <Image src={githubImg} alt="Github" width={50} height={50} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              voluptate animi at ipsum vero nobis provident.
            </p>
          </motion.div>
        </a>

        <a href="https://www.linkedin.com/in/david-emiliano-guti%C3%A9rrez-leal-5aa982257/" target="_blank">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={style.card}>
            <Image src={linkedinImg} alt="Lindedin" width={50} height={50} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              voluptate animi at ipsum vero nobis provident.
            </p>
          </motion.div>
        </a>

        <a href="mailto:a01568890@tec.mx" target="_blank">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={style.card}>
            <Image src={mailImg} alt="Mail" width={50} height={50} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              voluptate animi at ipsum vero nobis provident.
            </p>
          </motion.div>
        </a>

      </div>
    </div>
  );
}
