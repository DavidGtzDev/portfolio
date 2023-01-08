import React from "react";
import style from "./style.module.css";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

export default function Github() {
  return (
    <div className={style.github}>
      <div className={style.githubText}>
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
      <div style={{ width: "30vw", height: "5vh" }}>
        <CalendarHeatmap
          startDate={new Date("2016-01-01")}
          endDate={new Date("2016-07-01")}
          gutterSize={3.5}
          values={[
            { date: "2016-01-01", count: 1 },
            { date: "2016-01-22", count: 2 },
            { date: "2016-01-30", count: 3 },
            // ...and so on
          ]}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-scale-${value.count}`;
          }}
        />
      </div>
    </div>
  );
}
