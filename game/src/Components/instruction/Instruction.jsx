import React from "react";
import progress from "../../assets/progress.png";
import Banana from "../../assets/disableB.png";
import styles from "./Instruction.module.css";
import BackBtn from "../../assets/back.png";
import PlayBtn from "../../assets/play.png";
import { useNavigate } from "react-router-dom";
import Card from "../../assets/plainCard.png";
import PinkCard from "../../assets/pinkCard.png";
import AppleCard from "../../assets/appleCard.png";
import One from "../../assets/one.png";
import Path from "../../assets/path.png";
import BlueCard from "../../assets/blueCard.png";
import GreenRect from "../../assets/Rectangle .png";
import Two from "../../assets/two.png";
import Pair from "../../assets/pair.png";
import OrgRect from "../../assets/Rectangle2.png";
import Three from "../../assets/three.png";
import Spot1 from "../../assets/spot1.png";
import Spot2 from "../../assets/spot2.png";
import sound2 from "../../assets/sound2.wav";
import sound1 from "../../assets/sound1.mp3";

const Instruction = () => {
  const nav = useNavigate();

  function play2(){
    new Audio(sound2).play();
  }
  function play(){
    new Audio(sound1).play();
  }

  const handleClick = () => {
    play2();
    nav("/question");
  };
  const handleNav = () => {
    play();
    nav("/activity");
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
      <div className={styles.btn}>
        <img src={PlayBtn} alt="btn" width={300} onClick={handleNav} />
      </div>

      <div>
        <div className={styles.card1}>
          <img src={Card} alt="" width={300} />
          <div className={styles.pinkCard}>
            <img src={PinkCard} alt="" width={150} />
          </div>
          <div className={styles.appleCard}>
            <img src={AppleCard} alt="" width={150} />
          </div>
          <div className={styles.one}>
            <img src={One} alt="" width={50} />
          </div>
          <p className={styles.info}>
            Select a <br /> pink card.
          </p>
          <p className={styles.desciption}>It has images.</p>
        </div>
        <div className={styles.card2}>
          <img src={Card} alt="" width={300} />
          <div className={styles.blueCard}>
            <img src={BlueCard} alt="" width={180} />
          </div>

          <div className={styles.one}>
            <img src={GreenRect} alt="" width={50} />
            <div>
              <img src={Two} alt="" className={styles.two} />
              <img src={Spot1} alt="" className={styles.spot1} />
              <img src={Spot2} alt="" className={styles.spot2} />
            </div>
          </div>
          <p className={styles.info}>
            Select a <br /> blue card.
          </p>
          <p className={styles.desciption}>It has alphabets.</p>
        </div>
        <div className={styles.card3}>
          <img src={Card} alt="" width={300} />
          <div className={styles.pair}>
            <img src={Pair} alt="" width={250} />
          </div>

          <div className={styles.one}>
            <img src={OrgRect} alt="" width={50} />
            <div>
              <img src={Three} alt="" className={styles.two} />
              <img src={Spot1} alt="" className={styles.spot1} />
              <img src={Spot2} alt="" className={styles.spot2} />
            </div>
          </div>
          <p className={styles.desciption1}>If they’re same</p>
          <p className={styles.info3}>Its a match !</p>
          <p className={styles.desciption2}>otherwise retry :(</p>
        </div>
      </div>
      <div className={styles.path}>
        <img src={Path} alt="" width={800} />
      </div>
    </div>
  );
};

export default Instruction;