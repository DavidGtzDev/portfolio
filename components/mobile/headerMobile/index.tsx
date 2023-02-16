import React from 'react'
import style from './style.module.css'

export default function HeaderMobile() {
  return (
    <div className={style.headerMobile}>
        <h1>Hi, my name is </h1>
        <h1 className={style.name}>David</h1>
    </div>
  )
}
