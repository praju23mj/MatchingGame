import React from 'react'
import fmonkey from "../../assets/fmonkey.png";
import fbutt from "../../assets/fbutt.png";
import fback from "../../assets/fback.png";
import ftop from "../../assets/ftop.png";
import banana from "../../assets/banana.png";
import styles from "./Finish.module.css"
import { useNavigate } from 'react-router-dom';
import sound2 from "../../assets/sound2.wav";

const Finish = () => {
    function play2(){
        new Audio(sound2).play();
      }

    const nav=useNavigate()
    const handleClick=()=>{
        play2();
        nav("/instruction");
    }
  return (
    <div>
       
            <img src={fback} alt='img1' className={styles.img1}/>
            <img src={ftop} alt='img2' className={styles.img2}/>
            <img src={fbutt} alt='img3' className={styles.img3} onClick={handleClick}/>
            <img src={fmonkey} alt='img4' className={styles.img4}/>

            <img src={banana} alt='img5' className={styles.b1}/>
            <img src={banana} alt='img6' className={styles.b2}/>
            <img src={banana} alt='img7' className={styles.b3}/>
            <img src={banana} alt='img8' className={styles.b4}/>
            <img src={banana} alt='img9' className={styles.b5}/>
            <img src={banana} alt='img10' className={styles.b6}/>
            <img src={banana} alt='img11' className={styles.b7}/>
    </div>
  )
}

export default Finish