import React from "react";
import styles from "./Question.module.css";
import BackBtn from "../../assets/back.png";
import Monkey from "../../assets/monkey.png";
import YesBtn from "../../assets/yes.png";
import Cloud from "../../assets/cloud.png";
import { useNavigate } from "react-router-dom";
import progress from "../../assets/progress.png";
import Banana from "../../assets/disableB.png";
import sound2 from "../../assets/sound2.wav";
import sound1 from "../../assets/sound1.mp3";

const Question = () => {
  const nav = useNavigate();

  function play2(){
    new Audio(sound2).play();
  }
  function play(){
    new Audio(sound1).play();
  }

  const handleClick = () => {
    play2();
    nav("/intro");
  };

  const handleNav = () => {
    play();
    nav("/instruction");
  };
  return (
    <div>
      <div className={styles.disableProgreess}>
        <img src={progress} alt="" width={600} />
      </div>
      <div className={styles.disableBanana}>
        <img src={Banana} alt="" width={130} />
      </div>
      <div className={styles.back}>
        <img src={BackBtn} alt="" width={130} onClick={handleClick} />
      </div>
      <div className={styles.wraaper}>
        <img src={Monkey} alt="monkey" width={550} className="monkey" />
      </div>
      <div className={styles.btn}>
        <img src={YesBtn} alt="btn" width={300} onClick={handleNav} />
      </div>
      <div className={styles.img}>
        <img src={Cloud} alt="cloud" width={450} />
        <p className={styles.intro}>Can you help me get some ?🤔</p>
      </div>
    </div>
  );
};

export default Question;