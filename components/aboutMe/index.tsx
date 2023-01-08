import Image from "next/image";
import catOneImg from "../../assets/cat_one.jpg";
import style from "./style.module.css";

export default function AboutMe() {
  return (
    <div className={style.aboutMe}>
      <div className={style.text}>
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
          /* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          pretium pulvinar ex sodales ultricies. Cras sit amet justo vehicula
          ligula vulputate posuere nec eu metus. Phasellus quis congue ligula.
          Phasellus vitae libero in lacus maximus venenatis eu sed felis.
          Curabitur fringilla erat quis dolor tempus, non interdum risus
          aliquam.
        </p> 
        <p className={style.comment}>
          Nullam luctus egestas diam, nec auctor lectus tempus ut.
          Integer tempus dui nunc, vel sagittis metus tempor vel. Suspendisse ut
          volutpat ante. Vestibulum hendrerit, leo in pharetra pulvinar, ante
          justo dictum eros, id venenatis neque odio eu diam. Suspendisse sem
          odio, fermentum quis accumsan a, malesuada ut nulla. Fusce imperdiet
          sodales aliquam. */
        </p>
      </div>
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
    </div>
  );
}
