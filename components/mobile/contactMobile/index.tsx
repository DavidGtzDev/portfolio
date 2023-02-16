import React from 'react'
import Image from 'next/image'
import githubImg from '../../../assets/github.png'
import linkedinImg from '../../../assets/linkedin.png'
import mailImg from '../../../assets/mail.png'
import { motion } from 'framer-motion'
import style from './style.module.css'

export default function ContactMobile() {
  return (
    <div className={style.cardContainer}>
        <h1>Contact Me</h1>
        
        <a href="https://github.com/DavidGtzDev" target="_blank">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={style.card}
          >
            <Image src={githubImg} alt="Github" width={50} height={50} />
            <p>
              Most good programmers do programming not because they expect to
              get paid or get adulation by the public, but because it is fun to
              program. <br></br>
              <span style={{ color: "#61AFEF" }}> Linus Trovalds </span>
            </p>
          </motion.div>
        </a>

        <a
          href="https://www.linkedin.com/in/david-emiliano-guti%C3%A9rrez-leal-5aa982257/"
          target="_blank"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={style.card}
          >
            <Image src={linkedinImg} alt="Lindedin" width={50} height={50} />
            <p>
              Innovation distinguishes between a leader and a follower. <br></br>
              <span style={{ color: "#61AFEF" }}> Steve Jobs </span>
            </p>
          </motion.div>
        </a>

        <a href="mailto:a01568890@tec.mx" target="_blank">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={style.card}
          >
            <Image src={mailImg} alt="Mail" width={50} height={50} />
            <p>
            Be curious. Read widely. Try new things. What people call intelligence just boils down to curiosity. <br></br>
              <span style={{ color: "#61AFEF" }}> Aaron Swartz </span>
            </p>
          </motion.div>
        </a>
    </div>
  )
}
