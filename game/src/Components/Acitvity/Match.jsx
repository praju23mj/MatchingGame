import React from 'react'
import NextBtn from "../../assets/next.png";
import styles from "./Match.module.css";
import pinkCard from "../../assets/pinkCard.png";
import blueCard from "../../assets/blueCard.png";
import sound1 from "../../assets/sound1.mp3";
const Match = ({match,setMatch,data}) => {
    function play(){
        new Audio(sound1).play();
      }
    console.log(data)
  return (
    <div>
        <div className={styles.cardContainer}>
            <img src={data.back} alt='back1'/>
      </div>
      <div className={styles.cardContainer2}>
            <img src={data.back} alt='back2'/>
      </div>
        <p className={styles.text}>It's a match !</p>
        <div className={styles.btn}>
        <img src={NextBtn} alt="btn" width={300} onClick={()=>{
            play();
            setMatch(false)
        }}/>
      </div>
    </div>

  )
}

export default Match