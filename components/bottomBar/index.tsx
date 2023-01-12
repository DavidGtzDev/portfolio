import React from 'react'
import arrowSVG from "../../assets/arrow.svg";
import smallarrowSVG from "../../assets/smallarrow.svg";
import style from './style.module.css'
import Image from "next/image";

export default function BottomBar() {
  return (
    <div className={style.bottom}>
        <Image src={smallarrowSVG} alt="smallarrow"/>
        <Image src={arrowSVG} alt="arrow" />
    </div>
  )
}
