import React from 'react'
import style from './style.module.css'
import { useEffect } from 'react';

export default function InfiniteList() {

    useEffect(() => {
        const infinite_ul = document.getElementById('infinite_ul');
        if(!infinite_ul) return;
        for(let i = 0; i < 40; i++) {
            const li = document.createElement('li');
            li.textContent = i.toString();
            infinite_ul.appendChild(li);
        }
        
    }, []);

    return (
        <div className={style.infinite_ul}>
            <ul id='infinite_ul'>
            </ul>
        </div>
    );
}
