import React, { useState } from "react";
import styles from "./Activity.module.css";
import BackBtn from "../../assets/back.png";
import { useNavigate } from "react-router-dom";
import CardComponent from "./CardComponent";
import Banana from "../../assets/banana.png";
import sound2 from "../../assets/sound2.wav";

const Activity = () => {

  function play2(){
    new Audio(sound2).play();
  }

  const nav = useNavigate();

  const [count, setCount] = useState(10);

  const handleClick = () => {
    play2();
    nav("/instruction");
  };

  return (
    <div>
      <div className={styles.disableBanana}>
        <img src={Banana} alt="" width={130} />
      </div>
      <div className={styles.progess}>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped active"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: `${count}%`,
              backgroundColor: "#fcdb03",
            }}
          ></div>
        </div>
      </div>
      <div className={styles.back}>
        <img src={BackBtn} alt="" width={130} onClick={handleClick} />
      </div>
      <div className={styles.cardWrapper}>
        <CardComponent count={count} setCount={setCount} />
      </div>
    </div>
  );
};

export default Activity;