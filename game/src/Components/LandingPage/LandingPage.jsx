import React, { useRef, useState } from "react";
import Monkey from "../../assets/monkey.png";
import styles from "./LandingPage.module.css";
import StartBtn from "../../assets/startbtn.png";
import Cloud from "../../assets/cloud.png";
import Star from "../../assets/Star.png";
import Setting from "../../assets/setting.png";
import { useNavigate } from "react-router-dom";
import sound1 from "../../assets/sound1.mp3";
const LandingPage = () => {
  const nav = useNavigate();
  function play(){
    new Audio(sound1).play();
  }
  const handleClick = () => {
    play()
    nav("/intro");

  };
  return (
    <div>
      <div className={styles.wraaper}>
        <img src={Monkey} alt="monkey" width={550} className="monkey" />
      </div>
      <div className={styles.btn}>
        <img src={StartBtn} alt="btn" width={300} onClick={handleClick} />
      </div>
      <div className={styles.img}>
        <img src={Cloud} alt="cloud" width={450} />
        <p>Welcome Kiddo !</p>
      </div>
      <div className={styles.star}>
        <img src={Star} alt="star" />
      </div>
      <div className={styles.setting}>
        <img src={Setting} alt="setting" />
      </div>
      
    </div>
  );
};

export default LandingPage;