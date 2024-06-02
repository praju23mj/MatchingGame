import React, { useEffect, useState } from "react";
import PinkCard from "../../assets/pinkCard.png";
import BlueCard from "../../assets/blueCard.png";
import Apple from "../../assets/apple.webp";
import Banana from "../../assets/banana.png";
import Orange from "../../assets/orange.jpg";
import Kiwi from "../../assets/kiwi.jpeg";
import Grape from "../../assets/grape.jpeg";
import Mango from "../../assets/mango.jpg";
import styles from "./card.module.css";
import hint1 from "../../assets/hint1.png";
import hint2 from "../../assets/hint2.png";
import cloud from "../../assets/cloud.png";
import Match from "./Match";
import Finish from "./Finish";
import { useNavigate } from "react-router-dom";
import sound1 from "../../assets/sound1.mp3";
import matchSound from "../../assets/matchSound.wav";
import loose from "../../assets/loose.wav";
import win from "../../assets/win.wav";
const CardComponent = ({ count, setCount }) => {

  function play(){
    new Audio(sound1).play();
  }
  function play3(){
    new Audio(matchSound).play();
  }
  function play4(){
    new Audio(loose).play();
  }
  function play5(){
    new Audio(win).play();
  }

  const [pinkCards, setPinkCards] = useState([
    { id: 1, back: Apple, flipped: false },
    { id: 2, back: Orange, flipped: false },
    { id: 3, back: Banana, flipped: false },
    { id: 4, back: Kiwi, flipped: false },
    { id: 5, back: Grape, flipped: false },
    { id: 6, back: Mango, flipped: false },
  ]);

  const [blueCards, setBlueCards] = useState([
    { id: 12, back: Mango, flipped: false },
    { id: 7, back: Apple, flipped: false },
    { id: 11, back: Grape, flipped: false },
    { id: 9, back: Banana, flipped: false },
    { id: 10, back: Kiwi, flipped: false },
    { id: 8, back: Orange, flipped: false },
  ]);
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [hints1, setHints1] = useState(true);
  const [hints2, setHints2] = useState(false);
  const [match, setMatch] = useState(false);
  const [data, setData] = useState({});
  const [wrong, setWrong] = useState(7);
  const [one,setOne]=useState(0);
  const nav=useNavigate();

  const handleClick = (id, cardSet, setCardSet) => {
    play();
    setOne(one+1);
    console.log(id);
    setHints1(false);
    if(one===0){
      setHints2(true);
    }
   
    setCardSet((prevCards) =>
      prevCards.map((card) => ({
        ...card,
        flipped: card.id === id ? !card.flipped : false,
      }))
    );
    if (cardSet === pinkCards) {
      setV1(id);
    } else {
      setV2(id);
    }
    console.log(v1, v2);
  };

  useEffect(() => {
    setTimeout(() => {
      if (v1 === v2 - 6 && v1 !== 0 && v2 !== 0) {
        play3();
        setPinkCards((prevCards) =>
          prevCards.map((card) =>
            card.id === v1 || card.id === v2
              ? { ...card, visibility: "hidden" }
              : card
          )
        );
        setBlueCards((prevCards) =>
          prevCards.map((card) =>
            card.id === v1 || card.id === v2
              ? { ...card, visibility: "hidden" }
              : card
          )
        );
       setV1(0);
       setV2(0);
        setCount(count + 15);
        setMatch(true);
        setData(pinkCards.find(ele=>ele.id===v1))
       
      }else if(v1!==v2 && v1!==0 && v2!==0){
        
        if(wrong===0){
          play4();
          nav("/instruction")
        }
         
          setWrong(wrong-1);
        
      }
    }, 500);
  }, [v1, v2]);
  useEffect(()=>{
    if (count === 100) {
      play5();
      setMatch(false);
    }
  }, [count, setMatch]
  )
  console.log(count)

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardContainer}>
        {hints1?(<>
        <img src={hint1} alt="hint1" className={styles.hint1}/>
        <img src={cloud} alt="cloud" className={styles.cloud}/>
        <p className={styles.intro}>Select a card</p></>):""}
        <div className={styles.wrong}><p>Wrong move left :{wrong}</p></div>
        {pinkCards.map((card) => (
          <div
            className={`${styles.card} ${
              card.flipped ? styles.cardFlipped : ""
            } `}
            id={card.id}
            onClick={() => handleClick(card.id, pinkCards, setPinkCards)}
            style={{ visibility: card.visibility }}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src={PinkCard} alt="Front" />
              </div>
              <div className={styles.cardBack}>
                <img src={card.back} alt="Back" width={100} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cardContainer}>
        {hints2?(<><img src={hint2} alt="hint2" className={styles.hint2}/>
        <img src={cloud} alt="cloud" className={styles.cloud2}/>
        <p className={styles.intro2}>Now select <br/>second card.</p></>):""}
        
        {blueCards.map((card) => (
          <div
            className={`${styles.card} ${
              card.flipped ? styles.cardFlipped : ""
            } `}
            id={card.id}
            onClick={() =>{ handleClick(card.id, blueCards, setBlueCards);
              setHints2(false)
            }}
            style={{ visibility: card.visibility }}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src={BlueCard} alt="Front" />
              </div>
              <div className={styles.cardBack}>
                <img src={card.back} alt="Back" width={100} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {match?(<div className={styles.match}><Match match={match} setMatch={setMatch} data={data}/></div>):""}
      {count === 100 ? <div className={styles.match}><Finish /></div> : null}
    </div>

  );
 
};

export default CardComponent;