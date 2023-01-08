import React from "react";
import style from "./style.module.css";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

export default function Github() {
  return (
    <div className={style.github}>
      <div>
        <p>
          <span className={style.color_blue}>David.github</span>
          .latest
          <span className={style.color_red}> = </span>
          <span className={style.color_yellow}>{"{"}</span>
          <br></br>
          <span className={style.color_yellow}>
            'date': '2020-08-01', <br></br>
            'count': 5, <br></br>
            'repo': 'My-Portfolio' <br></br>
            {"}"}
          </span>
        </p>
      </div>

      
    </div>
  );
}
