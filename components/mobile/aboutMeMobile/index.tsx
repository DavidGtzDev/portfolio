import React from 'react'
import Image from 'next/image'
import meOneImg from '../../../assets/meOne.jpg'
import meTwoImg from '../../../assets/meTwo.jpg'
import style from './style.module.css'
import { motion } from "framer-motion";

export default function AboutMeMobile() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
    <div className={style.about}>
        <h1>About Me</h1>
        <p>
        /* Hi, my name is David Emiliano Gutiérrez Leal and I’m an 18 year old
          developer who is currently studying at Tecnológico de Monterrey.
        </p>
        <p>
            I’m mainly focused on web development but I am also passionate about
            digital signal processing in C++. My main goal is to work on projects
            that are not only challenging, but also beneficial to society. */
        </p>
        <Image
          src={meTwoImg}
          alt="Picture of the author"
          className={style.about_image}
        />
        <Image
          src={meOneImg}
          alt="Picture of the author"
          width={200}
          className={style.about_image}
        />
    </div>
    </motion.div>
  )
}
