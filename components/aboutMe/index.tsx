import Image from "next/image";
import catOneImg from "../../assets/cat_one.jpg";
import style from "./style.module.css";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={style.aboutMe}
    >
      <motion.div className={style.text}>
        <span className={style.color_cyan}>const </span>
        <span className={style.color_blue}>David </span>
        <span className={style.color_red}>= new </span>
        <span className={style.color_green}>Person</span>
        <span className={style.color_yellow}>("David"</span>
        <span className={style.color_white}>,</span>
        <span className={style.color_purple}> 18</span>
        <span className={style.color_white}>,</span>
        <span className={style.color_yellow}> "Developer")</span>

        <p className={style.comment}>
          /* Hi, my name is David Emiliano Gutiérrez Leal and I’m an 18 year old
          developer who is currently studying at Tecnológico de Monterrey.
        </p>
        <p className={style.comment}>
          I’m mainly focused on web development but I am also passionate about
          digital signal processing in C++. My main goal is to work on projects
          that are not only challenging, but also beneficial to society. */
        </p>
      </motion.div>
      <div className={style.aboutMe_image_container}>
        <Image
          src={catOneImg}
          alt="Picture of the author"
          className={style.aboutMe_image_first}
        />
        <Image
          src={catOneImg}
          alt="Picture of the author"
          className={style.aboutMe_image_second}
        />
      </div>
    </motion.div>
  );
}
